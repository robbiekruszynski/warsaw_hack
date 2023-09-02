import numpy as np
from scipy.stats import norm
import json
from web3 import Web3
from dotenv import load_dotenv
import os

load_dotenv()

# Get env variables
NODE_MAINNET = os.environ.get('NODE_MAINNET')
NODE_SEPOLIA = os.environ.get('NODE_SEPOLIA')

# Contracts
BLOCKS_PER_YEAR = 2_629_800
WSTETH_CONTRACT = '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0'
CP_ETH_CONTRACT = '0xc8A1F9461115EF3C1E84Da6515A88Ea49CA97660'
CP_WSTETH_CONTRACT = '0xc9Bb81d3668f03ec9109bBca77d32423DeccF9Ab'
with open('python/abi/wsteth.json', 'r') as f:
    WSTETH_ABI = json.load(f)
with open('python/abi/CP_ORACLE.json', 'r') as f:
    ORACLE_ABI = json.load(f)

def get_wsteth_rate_from_mainnet():
    node_url = NODE_MAINNET
    w3 = Web3(Web3.HTTPProvider(node_url, request_kwargs={'timeout': 20}))
    block = w3.eth.block_number
    block_30d = block - 7200*30
    wsteth_contract = w3.eth.contract(WSTETH_CONTRACT, abi=WSTETH_ABI)
    rate = wsteth_contract.functions.stEthPerToken().call(block_identifier=block)/1e18
    rate_30d = wsteth_contract.functions.stEthPerToken().call(block_identifier=block_30d)/1e18
    return (rate-rate_30d)*(365.25/30) / 0.9 # annualize and reapply 10% Lido fee

def get_wsteth_rate_from_chronicle():
    node_url = NODE_SEPOLIA
    w3 = Web3(Web3.HTTPProvider(node_url, request_kwargs={'timeout': 20}))
    cp_eth_contract = w3.eth.contract(CP_ETH_CONTRACT, abi=ORACLE_ABI)
    cp_wsteth_contract = w3.eth.contract(CP_WSTETH_CONTRACT, abi=ORACLE_ABI)
    block = w3.eth.block_number
    block_30d = block - 7200*30
    ratios = []
    for block in [block, block_30d]:
        # From addresses are hard-coded to be the oldest addresses whitelisted in the contract
        eth_price = cp_eth_contract.caller(transaction={'from': '0x0048d6225D1F3eA4385627eFDC5B4709Cab4A21c'}, block_identifier=block).tryRead()[1]
        wsteth_price = cp_wsteth_contract.caller(transaction={'from': '0xf9423e34eA3fF46a6f6EF42Cf9821aF9A55cEa82'}, block_identifier=block).tryRead()[1]
        ratios.append(wsteth_price / eth_price)
    return (ratios[0]-ratios[1])*(BLOCKS_PER_YEAR / (block_30d - block)) / 0.9 # annualize and reapply 10% Lido fee
