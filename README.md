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
- To work at a table level use `AWS.DynamoDB`
- To work at an item level use `AWS.DynamoDB.DocumentClient` [SDK Link](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html)

## Cool things about dynamodb
- DynamoDB returns max of 10 MB data, hence to limit the amount of data returned it supports paginated query
- With the first batch of dataset it returns value in a variable named `LastEvaluatedKey` which is the starting index of the next set of data. To retrieve the next set of data, simply place the value obtained from the above variable into a new variable named `ExclusiveStartKey`
- If no `LastEvaluatedKey` found then that is end of results page

[Read WIKI](https://github.com/utkaln/dynamodb-helloworld/wiki/DynamoDB)

