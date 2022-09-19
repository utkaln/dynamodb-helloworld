# dynamodb-helloworld
- This repo is created to learn dynamo db and programmed using AWS SDK

# Contribute
- Install Node LTS (check `node --version`) and install npm
- Create a IAM account with AWS with full access to dynamodb. Only allow programmatic access. Save the **access key** and the **secret key**
- Setup the newly created id from the above step locally - `aws configure` (Follow the prompt)
- Import dependency - aws sdk - `npm install aws-sdk`
- Test the setup by running - `node src/js/testsetup.js`. This should display list of dynamo db accessible to the IAM user


# Requirements to run node project
- This project is done using express, hence install `express` and `body-parser`
- Start a node project with following steps:
```js
npm init //initializes node project in current folder
npm install express
npm install body-parser
```
- Use these modules using following import statement at the top of any js file
```js
const express = require('express');
```

# DynamoDB
- Usually a single table suffices all the needs for the project. Hence a good idea would be separate tables based on environments, such as `DEV.TABLE_NAME`, `TEST.TABLE_NAME` etc. 
- Tables names must be unique within a region name.

## Data Types Supported in DynamoDB
- **Scalar** : `String`, `Number`, `Boolean`. This type data can be used as Partition key, Sort key or Index
- Partition key must be less than 2KB, Sort key must be less than 1KB
- **Map** : Unordered list of objects of same type. Can not have duplicate values
- **List** : Ordered list of objects, can be of any type data, can have duplicate values. Similar to JSON array
- **Map** : Unordered list of key value pairs, can have any type data. Similar to hashmap

## Consistency of Data
- DynamoDB maintains 3 different copies internally, with near realtime replication (< 1s)
- Eventually consistency is 50% cheaper than strong consistency
- Default choice is eventual consistency. Strong consistency can be achieved by on demand

## Throughput and Scaling 
- **1 capacity unit** (cu) = 1 request / second
- Calculation is done for Read Capacity Unit (RCU) or Write Capacity Unit (WCU). These are the major factors for budgeting. Though storage has cost too
- Important to consider scaling based on RCU and WCU
- **RCU**
  - 1 Strong Consistent Read Request / second
  - 2 Eventual Consistent Read Request / second
  - Can read upto 4 KB data / second
  - Example: 
    - Avg Item Size : 10 KB
    - Provisioned Capacity: 10 RCU 
    - Strong Consistency Throughput: 10 * 4 = 40 KB / second
    - Eventual Consistency Throughput: 10 * 2 * 4 = 80 KB / second
- **WCU**
  - 1 Write Request / second
  - Can write upto 1 KB data / second
  - Example: 
    - Avg Item Size : 10 KB
    - Provisioned Capacity: 10 WCU
    - Write Througput: 10 * 1 = 10 KB / second
- DynamoDB provides burst capacity upto 300 seconds of unused capacity, this is used occassionally
- **Scale up** can happen on demand anytime
- **Scale down** can only happen max. 4 times a day
- 1 partition supports upto **1000 WCUs** or **3000 RCUs**
- 1 partition can store up to **50 GB** of data
- With more data requirement or througput requirement than 1 partition, DynamoDB will get more partitions, but the partition won't go away if the data size or throughput requirement comes down
- It distributes the RCU and WCU needs evenly on all available partitions
- Hence while planning it is important to go gradually up instead of coming to a requirement of going down





