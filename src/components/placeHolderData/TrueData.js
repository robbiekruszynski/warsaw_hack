// import { coloring } from "../../GlobalTheme";

// var mockLine = await fetch('https://svc.blockdaemon.com/reporting/staking/v1/ethereum/mainnet/periods/2', [
//             ['Authorization','Bearer <BEARER>']
//         ]  
//     );


// console.log('mockLine');
// console.log(mockLine);
export const trueLine = await fetch('https://svc.blockdaemon.com/reporting/staking/v1/ethereum/mainnet/periods/2', 
[
    ['Authorization','Bearer <BEARER>']
]  
).then((data) => {
console.log(data); // JSON data parsed by `data.json()` call
data.keys(data).forEach(key => {
    console.log(key, data[key]);
  });
// data.forEach(key => {
//     console.log(key, obj[key]);
//   });
});

// export const mockLine = [
//     {
//         "period": 1004,
//         // "periodStartTime": "2023-09-01T00:00:00Z", periodTotalReward / periodTotalStake
//         "periodEndTime": "2023-09-01T23:59:59Z",
//         "periodStartBlock": 0,
//         "periodTotalReward": 2841.1400537133904,
//         "periodTotalStake": 24664243.866602316,
//         "periodTotalSupply": 0,
//         "metadata": {
//         "totalProtocolRewards": 2205.650053908,
//         "totalBlockReturn": 416.90789367538764,
//         "totalMevRewards": 218.5821061300027
//         }
//         },
//         {
//         "period": 1003,
//         "periodStartTime": "2023-08-31T00:00:00Z",
//         "periodEndTime": "2023-08-31T23:59:59Z",
//         "periodStartBlock": 0,
//         "periodTotalReward": 2962.32458212492,
//         "periodTotalStake": 24594658.89538138,
//         "periodTotalSupply": 0,
//         "metadata": {
//         "totalProtocolRewards": 2206.770955281,
//         "totalBlockReturn": 460.92261071632754,
//         "totalMevRewards": 294.6310161275929
//         }
//     },
//     ];

    
     