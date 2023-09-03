# Valspin at EthWarsaw

Valspin is an application that sells insurance contracts and swaps to guarantee fixed yields for sets of validators over fixed periods of time. An entity that owns several validators may desire to have a fixed return or one with a lower yield, hedging away the inherent stochastic risk.

Below is a distribution of staking returns for an entity that owns 100 validators over 100 days. Over 10,000 trials, we can see a wide range of returns centered around an average of 41.88 ETH with a standard deviation of 1.65 ETH. The full range covers 36.23 ETH to 48.80 ETH, showing the stochastic risk faced by validator owners, especially those with few validators.

<img src="src/assets/imgs/distribution.png" width="50%" />

## Products

Valspin offers two products for validator owners to hedge away stochastic risk, a swap contract and an insurance contract. Hedging away stochastic risk with such products is especially attractive to TradFi institutions issuing index products which promise investors an average return and any other entity that has a guaranteed liability at a future point in time and wants to lock in ETH staking yield.

### Insurance Contract

Our insurance contract allows a staker to cover any downside stochastic risk. The staker buys the contract from an investor for a predetermined premium. The investor guarantees a potential payout in a Request Network escrow contract. If the staker's validators underperform the average network return over that time period, the contract sends funds to the staker to cover any losses (subtracting any agreed-upon deductible). The remaining funds are returned to the investor. If the staker's validators outperform the average return by the end of the contract, no funds are transferred.

<img src="src/assets/imgs/insurance.png" width="50%" />

### Swap Contract

Our swap contract allows a counterparty (e.g. an investor) to provide the capital to cover a staking entity's stochastic risk. The staker pays a small fee to the investor. At the end of the swap, a Request Network invoice is sent to the staker if they earned an above-average return, paying the investor the outsized earnings. If the staker earned less than the expected return, the staker submits an invoice to the investor to cover their losses.

<img src="src/assets/imgs/swap.png" width="50%" />

Swap contracts can also be filled by other stakers with their own sets of validators as a form of income share agreement (ISA).

## Quickstart:

Install python packages (built on Python 3.10.0)

```
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Start flask server

```bash
python python/app.py
```

Start web server

```bash
npm i
npm start
```

#### Note on front end 

The concept moving beyong the MVP would be to further visualize the data being collected from Request and the custom API pulls. Ideally the user would be able to sign in and have full view of the wanted data along with have the ability to operate out of the Dapp as a standalone platform. 

The front end was build in house with a custom made theme implemented throughout the project utalizing MUI and NIVO.


### Sample Flask endpoints:

Query 30d yield of ETH staking

```bash
curl -X GET -H "Content-Type: application/json" http://localhost:5000/get_rate
```

Calculate value of a swap

```bash
curl -X POST -H "Content-Type: application/json" -d '{"days": 100, "vals": 100}' http://localhost:5000/calculate_swap
```

Calculate value of an insurance contract

```bash
curl -X POST -H "Content-Type: application/json" -d '{"days": 100, "vals": 100, "deductible_amount": 1, "deductible_type": "eth"}' http://localhost:5000/calculate_insurance
```
