import { coloring } from "../../GlobalTheme";


export const mockData = [
  {
    id: 1,
    name: "Cool Araby",
    email: "soangry@gmail.com",
    age: 66,
    phone: "(555)-555-555",
    access: "telegram admin",
    cost: 3.50,
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

export const trueLine = [
  {
    "period": 1004,
    "periodStartTime": "2023-09-01T00:00:00Z",
    "periodEndTime": "2023-09-01T23:59:59Z",
    "periodStartBlock": 0,
    "periodTotalReward": 2841.1400537133904,
    "periodTotalStake": 24664243.866602316,
    "periodTotalSupply": 0,
    "metadata": {
    "totalProtocolRewards": 2205.650053908,
    "totalBlockReturn": 416.90789367538764,
    "totalMevRewards": 218.5821061300027
    }
    },
    {
    "period": 1003,
    "periodStartTime": "2023-08-31T00:00:00Z",
    "periodEndTime": "2023-08-31T23:59:59Z",
    "periodStartBlock": 0,
    "periodTotalReward": 2962.32458212492,
    "periodTotalStake": 24594658.89538138,
    "periodTotalSupply": 0,
    "metadata": {
    "totalProtocolRewards": 2206.770955281,
    "totalBlockReturn": 460.92261071632754,
    "totalMevRewards": 294.6310161275929
    }
    },
    {
    "period": 1002,
    "periodStartTime": "2023-08-30T00:00:00Z",
    "periodEndTime": "2023-08-30T23:59:59Z",
    "periodStartBlock": 0,
    "periodTotalReward": 2966.7617235454322,
    "periodTotalStake": 24527509.82455355,
    "periodTotalSupply": 0,
    "metadata": {
    "totalProtocolRewards": 2203.825490547,
    "totalBlockReturn": 509.55726475351054,
    "totalMevRewards": 253.37896824492165
    }
    },
    {
    "period": 1001,
    "periodStartTime": "2023-08-29T00:00:00Z",
    "periodEndTime": "2023-08-29T23:59:59Z",
    "periodStartBlock": 0,
    "periodTotalReward": 3440.561730899824,
    "periodTotalStake": 24456728.948328424,
    "periodTotalSupply": 0,
    "metadata": {
    "totalProtocolRewards": 2184.208605853,
    "totalBlockReturn": 792.8674693851732,
    "totalMevRewards": 463.48565566165075
    }
    },
    {
    "period": 1000,
    "periodStartTime": "2023-08-28T00:00:00Z",
    "periodEndTime": "2023-08-28T23:59:59Z",
    "periodStartBlock": 0,
    "periodTotalReward": 3221.7602225159253,
    "periodTotalStake": 24383513.99404783,
    "periodTotalSupply": 0,
    "metadata": {
    "totalProtocolRewards": 2184.692405773,
    "totalBlockReturn": 711.6146469030948,
    "totalMevRewards": 325.45316983983054
    }
    },
  ];

export const mockLine = [
  {
    id: "Hold 1",
    color: coloring("dark").lime[500],
    data: [
      {
        x: "1",
        y: 101,
      },
      {
        x: "2",
        y: 75,
      },
      {
        x: "3",
        y: 36,
      },
      {
        x: "4",
        y: 216,
      },
      {
        x: "5",
        y: 35,
      },
      {
        x: "6",
        y: 236,
      },
      {
        x: "7",
        y: 88,
      },
      {
        x: "8",
        y: 232,
      },
      {
        x: "9",
        y: 281,
      },
      {
        x: "10",
        y: 1,
      },
      {
        x: "11",
        y: 35,
      },
      {
        x: "12",
        y: 14,
      },
    ],
  },
  {
    id: "Hold",
    color: coloring("dark").green[300],
    data: [
      {
        x: "1",
        y: 212,
      },
      {
        x: "2",
        y: 190,
      },
      {
        x: "3",
        y: 270,
      },
      {
        x: "4",
        y: 9,
      },
      {
        x: "5",
        y: 75,
      },
      {
        x: "6",
        y: 175,
      },
      {
        x: "7",
        y: 33,
      },
      {
        x: "8",
        y: 189,
      },
      {
        x: "9",
        y: 97,
      },
      {
        x: "10",
        y: 87,
      },
      {
        x: "11",
        y: 299,
      },
      {
        x: "12",
        y: 251,
      },
    ],
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


export const mockBar = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];