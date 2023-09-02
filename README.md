# Valspin at EthWarsaw

Valspin is an application that sells insurance contracts and swaps to guarantee fixed yields for sets of validators over fixed periods of time. An entity that owns several validators may desire to have a fixed return or one with a lower yield, hedging away the inherent stochastic risk.

Below is a distribution of staking returns for an entity that owns 100 validators over 100 days. Over 10,000 trials, we can see a wide range of returns centered around an average of 41.88 ETH with a standard deviation of 1.65 ETH. The full range covers 36.23 ETH to 48.80 ETH, showing the stochastic risk faced by validator owners, especially those with few validators.

<img src="src/assets/imgs/distribution.png" width="30%" />

## Products
Valspin offers two products for validator owners to hedge away stochastic risk, a swap contract and an insurance contract. Hedging away stochastic risk with such products is especially attractive to TradFi institutions issuing index products which promise investors an average return and any other entity that has a guaranteed liability at a future point in time and wants to lock in ETH staking yield.

### Swap Contract
Our swap contract allows an investor to provide the capital to cover a staking entity's stochastic risk. The staker pays a small fee to the investor. The investor's capital is sent to a Request Network contract 

### Insurance Contract
Our insurance contract allows a staker to cover any downside stochastic risk. The staker buys the contract from an investor for a predetermined premium. The investor guarantees a potential payout in a Request Network escrow contract. If the staker's validators underperform the average network return over that time period, the contract sends funds to the staker to cover any losses (subtracting any agreed-upon deductible). The remaining funds are returned to the investor. If the staker's validators outperform the average return by the end of the contract, no funds are transferred.

<img src="src/assets/imgs/insurance.png" width="30%" />

## Quickstart:

Install python packages
```
python -m venv venv
source venv/bin/activate
```

Start flask server
```bash
python python/api.py
```