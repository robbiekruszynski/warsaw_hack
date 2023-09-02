import numpy as np
from scipy.stats import norm
import json

def quote(n_days: int, n_vals: int, deductible_val: float = 0, deductible_type: str = 'eth'):
    """
        Provides a quote for an insurance product that guarantees an above-average yield
        for a set of validators.
    """
    print(f"Buying insurance contract for {n_vals} validators and {n_days} days.")
    print(f"Deductible of type {deductible_type} is {deductible_val}{' ETH' if deductible_type == 'eth' else ''}")
    print("")
    
    _profit_margin = 0.2
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

    # Calculate the Z-score for the guaranteed return, considering a potential deductible
    if deductible_type == 'eth':
        deductible = deductible_val
    elif deductible_type == 'pct':
        deductible = expected_total_return_all_days * deductible_val
    else:
        raise(NotImplementedError())
        
    guaranteed_return = expected_total_return_all_days - deductible
    Z_score = (guaranteed_return - expected_total_return_all_days) / std_total_return_all_days

    # Calculate the probability of getting a return less than the guaranteed return
    probability_of_payout = norm.cdf(Z_score)

    # Calculate the payout amount (difference between guaranteed amount and lower CI limit)
    payout_amount = guaranteed_return - lower_bound

    # Calculate the expected payout
    expected_payout = probability_of_payout * payout_amount

    # Calculate the premium for the insurance
    premium = expected_payout * (1 + _profit_margin)

    print("-"*40)
    print("Return:")
    print(f"Expected total return:  {round(expected_total_return_all_days, 3)} ETH")
    print(f"Expected max return:    {round(upper_bound, 3)} ETH")
    print(f"Expected min return:    {round(lower_bound, 3)} ETH")
    print(f"Expected gross APY:     {round(expected_total_return_all_days / (n_vals * 32) * (365.25/n_days) * 100, 3)}%")
    print("-"*40)
    print("Policy:")
    print(f"Deductible amount:      {round(deductible, 3)} ETH")
    print(f"Probability of payout:  {round(probability_of_payout * 100, 2)}%")
    print(f"Exp max payout amount:  {round(payout_amount, 3)} ETH")
    print(f"Exp avg payout amount:  {round(expected_payout, 3)} ETH")
    print(f"Premium to charge:      {round(premium, 3)} ETH")
    print("-"*40)
    print(f"Expected covered return: {round(expected_total_return_all_days - premium, 3)} ETH")
    print(f"Expected covered APY:    {round((expected_total_return_all_days - premium) / (n_vals * 32) * (365.25/n_days) * 100, 3)}%")
    return {
        'returns': {
            'total': expected_total_return_all_days,
            'max': upper_bound,
            'min': expected_total_return_all_days - deductible,
            'covered': expected_total_return_all_days - premium
        },
        'yields': {
            'gross': expected_total_return_all_days / (n_vals * 32) * (365.25/n_days),
            'covered': (expected_total_return_all_days - premium) / (n_vals * 32) * (365.25/n_days),
        },
        'policy': {
            'premium': premium,
            'deductible': deductible,
            'maxPayout': payout_amount,
        }
    }


if __name__ == "__main__":
    quote('insurance', n_days = 100, n_vals = 100, deductible_val = 0.05, deductible_type = 'pct')