import { coloring } from "../../GlobalTheme";
// require('dotenv').config();
// import 'dotenv/config'


export const rate = await fetch('http://localhost:5000/get_rate', 
{ 
  method: 'GET',
  headers: {
    "Content-Type":'application/json',
  },
  redirect: 'follow'
} 
).then((response) => response.json());

export const mockData = [
  {
    id: 1,
    name: "Cool Araby",
    email: "soangry@gmail.com",
    age: 66,
    phone: "(555)-555-555",
    access: "telegram admin",
    cost: 3.50,
    date: "09/01/2024",
    wallet: "0x388C818CA8B9251b393131C08a736A67ccB19297"
  },
];

export const mockTransactions = [
    {
      txId: "01e4dsa",
      user: "Droo",
      date: "2023-09-02",
      cost: "1,600",
    },
    {
      txId: "0315dsaa",
      user: "Jan",
      date: "2023-09-02",
      cost: "600",
    },
    {
      txId: "01e4dsa",
      user: "Randee",
      date: "2023-09-02",
      cost: "420",
    },
];

export const mockPie = [
  {
    id: "1",
    label: "1",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "2",
    label: "2",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "3",
    label: "3",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "4",
    label: "4",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "5",
    label: "5",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

const mockLineTemp = await fetch('https://svc.blockdaemon.com/reporting/staking/v1/ethereum/mainnet/periods/8', 
{
  headers: {"Authorization":'Bearer mTWZ46f2YRFkCbSA3AwIRpCoksF2K81zjEVdaZHLsFBv50Uu'}
}  
).then((response) => response.json());

export const mockLine = mockLineTemp;




var raw = JSON.stringify({
  "days": 100,
  "vals": 100
});

export const mockSwaps = await fetch('http://localhost:5000/calculate_swap', 
{ 
  method: 'POST',
  headers: {
    "Content-Type":'application/json',
  },
  body: raw,
  redirect: 'follow'
} 
).then((response) => response.json());

var rawInsurance = JSON.stringify({
  "days": 100,
  "vals": 100,
  "deductible_amount": 0.5,
  "deductible_type": 'eth'
});

export const mockInsurance = await fetch('http://localhost:5000/calculate_insurance', 
{ 
  method: 'POST',
  headers: {
    "Content-Type":'application/json',
  },
  body: rawInsurance,
  redirect: 'follow'
} 
).then((response) => response.json());


export const mockBar = [
  {
    country: "AD",
    "periodStartTime": 137,
    "periodStartTimeColor": "hsl(229, 70%, 50%)",
    periodStartTime: 96,
    periodColorColor: "hsl(296, 70%, 50%)",
    periodTotalStake: 24664243.866602316,
    periodTotalStakeColor: "hsl(97, 70%, 50%)",
    periodTotalReward: 2841.1400537133904,
    periodTotalRewardColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "periodStartTime": 55,
    "periodStartTimeColor": "hsl(307, 70%, 50%)",
    periodStartTime: 28,
    periodColorColor: "hsl(111, 70%, 50%)",
    periodTotalStake: 24594658.89538138,
    periodTotalStakeColorColor: "hsl(273, 70%, 50%)",
    periodTotalReward: 2206.770955281,
    periodTotalRewardColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "periodStartTime": 109,
    "periodStartTimeColor": "hsl(72, 70%, 50%)",
    periodStartTime: 23,
    periodColorColor: "hsl(96, 70%, 50%)",
    periodTotalStake: 24527509.82455355,
    periodTotalStakeColorColor: "hsl(106, 70%, 50%)",
    periodTotalReward:  2203.825490547,
    periodTotalRewardColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "periodStartTime": 133,
    "periodStartTimeColor": "hsl(257, 70%, 50%)",
    periodStartTime: 52,
    periodColorColor: "hsl(326, 70%, 50%)",
    periodTotalStake: 24456728.948328424,
    periodTotalStakeColorColor: "hsl(110, 70%, 50%)",
    periodTotalReward: 2184.208605853,
    periodTotalRewardColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "periodStartTime": 81,
    "periodStartTimeColor": "hsl(190, 70%, 50%)",
    periodStartTime: 80,
    periodColorColor: "hsl(325, 70%, 50%)",
    periodTotalStake: 24383513.99404783,
    periodTotalStakeColorColor: "hsl(54, 70%, 50%)",
    periodTotalReward: 2184.692405773,
    periodTotalRewardColor: "hsl(285, 70%, 50%)",
  },
];