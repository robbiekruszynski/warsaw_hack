import numpy as np
from scipy.stats import norm

def quote(n_days: int, n_vals: int):
    """
        Provides a quote for a swap product that swaps an average yield for a variable
        an average yield for a set of validators.
    """
    print(f"Buying swap contract for {n_vals} validators and {n_days} days.")
    print("")
    
    # Set investor cost of capital and confidence interval
    _cost_of_capital = 0.15 # 15%
    _cost_of_capital_n_days = _cost_of_capital * n_days / 365.25
    _confidence_interval = 0.95
    
    # Passive and active returns per day: HARDCODED FOR NOW
    win_passive = 1750
    win_active = 1200

    # Network parameters: HARDCODED FOR NOW
    n_blocks_per_day = 7200  # Total independent chances to win per day
    n_vals_total = 700000  # Total validators

    # Calculate the probability of winning in a single chance
    prob_win_single_chance = n_blocks_per_day / n_vals_total
    win_amount = win_active / n_blocks_per_day # Proposer return per block
    lose_amount = win_passive / n_vals_total  # Passive return per block
    
    # Calculate the expected daily return and variance of daily return
    expected_daily_return = n_vals * (prob_win_single_chance * win_amount + 
                                     (1 - prob_win_single_chance) * lose_amount)
    variance_daily_return = n_vals * (
        prob_win_single_chance * (win_amount)**2 + 
        (1 - prob_win_single_chance) * (lose_amount)**2
    ) - prob_win_single_chance**2 # https://math.oxford.emory.edu/site/math117/expectedValueVarianceOfBinomial/

    # Calculate the expected total return and variance of total return for 100 days
    expected_total_return_all_days = n_days * expected_daily_return
    variance_total_return_all_days = n_days * variance_daily_return

    # Calculate the standard deviation of total return for 100 days
    std_total_return_all_days = np.sqrt(variance_total_return_all_days)
    
    # Calculate the lower bound of the 95% confidence interval
    z_score = norm.ppf(1 - (1 - _confidence_interval) / 2)
    lower_bound = expected_total_return_all_days - z_score * std_total_return_all_days
    upper_bound = expected_total_return_all_days + z_score * std_total_return_all_days
    
    guaranteed_return = expected_total_return_all_days
    Z_score = (guaranteed_return - expected_total_return_all_days) / std_total_return_all_days

    # Calculate the probability of getting a return other than guaranteed return
    probability_of_payout = norm.cdf(Z_score)
    probability_of_payback = 1 - probability_of_payout

    # Calculate the payout amounts (difference between guaranteed amount and lower CI limit)
    payout_amount = expected_total_return_all_days - lower_bound
    payback_amount = upper_bound - expected_total_return_all_days

    # Calculate the expected payouts
    expected_payout = probability_of_payout * payout_amount
    expected_payback = probability_of_payback * payback_amount  # Probability is 0.5 or 50%

    # Calculate the net expected payment (expected payout - expected payback)
    net_expected_payment = expected_payout - expected_payback

    upper_bound, payback_amount, expected_payback, net_expected_payment
    print(f"Considering {n_vals} validators over {n_days} days and a {round(_confidence_interval*100)}% confidence interval:")
    print("-"*40)
    print(f"Lower bound:            {round(lower_bound, 3)}")
    print(f"Expected return:        {round(expected_total_return_all_days, 3)}")
    print(f"Upper bound:            {round(upper_bound, 3)}")
    print("-"*40)
    print(f"Probability of payout:  {round(probability_of_payout, 3)}")
    print(f"Probability of payback: {round(probability_of_payback, 3)}")
    print(f"Exp max payout (-):     {round(payout_amount, 3)}")
    print(f"Exp max payback (+):    {round(payback_amount, 3)}")
    print(f"Net Expected payment:   {round(net_expected_payment, 3)}")

    # Value of holding capital on hand to cover payout
    cost = _cost_of_capital_n_days * payout_amount
    cost_to_swap = cost / expected_total_return_all_days
    val_yield = expected_total_return_all_days / (n_vals*32)

    print("-"*40)
    print("Returns:")
    print(f"Return (gross):     {round(expected_total_return_all_days, 3)} ETH")
    print(f"Return (net):       {round(expected_total_return_all_days - cost, 3)} ETH")
    print("-"*40)
    print(f"{n_days} day yields:")
    print(f"Cost of capital:    {round(_cost_of_capital_n_days*100, 3)}%")
    print(f"Cost to swap ETH:   {round(cost, 3)} ETH")
    print(f"Cost to swap PCT:   {round(cost_to_swap * 100, 4)}% -- {round(cost_to_swap * 10000, 2)} BPS")
    print(f"Vals yield (gross): {round(val_yield * 100, 2)}%")
    print(f"Vals yield (nett):  {round((val_yield - cost_to_swap) * 100, 2)}%")
    print("-"*40)
    print("Annualized:")
    print(f"Vals APY (gross):   {round(val_yield * 365.25/n_days * 100 , 2)}%")
    print(f"Vals APY (net):     {round((val_yield - cost_to_swap) * 365.25/n_days * 100 , 2)}%")
    
    return {
        'returns': {
            'gross': expected_total_return_all_days,
            'max': expected_total_return_all_days,
            'min': expected_total_return_all_days,
            'covered': expected_total_return_all_days - cost
        },
        'yields': {
            'gross': expected_total_return_all_days / (n_vals * 32) * (365.25/n_days),
            'covered': (expected_total_return_all_days - cost) / (n_vals * 32) * (365.25/n_days),
        },
        'policy': {
            'cost': cost,
            'deductible': 0,
            'maxPayout': payout_amount,
            'maxPayback': -payback_amount,
        }
    }
