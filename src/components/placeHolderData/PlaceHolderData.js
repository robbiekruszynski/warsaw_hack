// import { coloring } from "../../GlobalTheme";
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
      state: "A",
      "1": 137,
      "1Color": "hsl(229, 70%, 50%)",
      2: 96,
      "2Color": "hsl(296, 70%, 50%)",
      3: 72,
      "3Color": "hsl(97, 70%, 50%)",
      4: 140,
      "4Color": "hsl(340, 70%, 50%)",
    },
    {
      state: "B",
      "1": 55,
      "1Color": "hsl(307, 70%, 50%)",
      2: 28,
      "2Color": "hsl(111, 70%, 50%)",
      3: 58,
      "3Color": "hsl(273, 70%, 50%)",
      4: 29,
      "4Color": "hsl(275, 70%, 50%)",
    },
    {
      state: "C",
      "1": 109,
      "1Color": "hsl(72, 70%, 50%)",
      2: 23,
      "2Color": "hsl(96, 70%, 50%)",
      3: 34,
      "3Color": "hsl(106, 70%, 50%)",
      4: 152,
      "4Color": "hsl(256, 70%, 50%)",
    },
    {
      state: "D",
      "1": 133,
      "1Color": "hsl(257, 70%, 50%)",
      2: 52,
      "2Color": "hsl(326, 70%, 50%)",
      3: 43,
      "3Color": "hsl(110, 70%, 50%)",
      4: 83,
      "4Color": "hsl(9, 70%, 50%)",
    },
    {
      state: "E",
      "1": 81,
      "1Color": "hsl(190, 70%, 50%)",
      2: 80,
      "2Color": "hsl(325, 70%, 50%)",
      3: 112,
      "3Color": "hsl(54, 70%, 50%)",
      4: 35,
      "4Color": "hsl(285, 70%, 50%)",
    },
    {
      state: "F",
      "1": 66,
      "1Color": "hsl(208, 70%, 50%)",
      2: 111,
      "2Color": "hsl(334, 70%, 50%)",
      3: 167,
      "3Color": "hsl(182, 70%, 50%)",
      4: 18,
      "4Color": "hsl(76, 70%, 50%)",
    },
    {
      state: "G",
      "1": 80,
      "1Color": "hsl(87, 70%, 50%)",
      2: 47,
      "2Color": "hsl(141, 70%, 50%)",
      3: 158,
      "3Color": "hsl(224, 70%, 50%)",
      4: 49,
      "4Color": "hsl(274, 70%, 50%)",
    },
  ];
  