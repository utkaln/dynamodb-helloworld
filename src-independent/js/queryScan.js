const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();


// QUERY with partition key only 
var qParams = {
    TableName: 'dev_learn_create',
    KeyConditionExpression: "user_id = :uid",
    ExpressionAttributeValues: {
        ":uid": 'abcd1234'
    }
};

docClient.query(qParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method query on PK -> ", err.code, err.message);
    } else {
        console.log("Returned data from method query on PK -> ", data);
    }
});

// QUERY with partition key and sort key
var qsParams = {
    TableName: 'dev_learn_create',
    KeyConditionExpression: "user_id = :uid and ts = :ts",
    ExpressionAttributeValues: {
        ":uid": 'abcd1234',
        ":ts": 1663718283930
    }
};

docClient.query(qsParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method query on PK and SK -> ", err.code, err.message);
    } else {
        console.log("Returned data from method query on PK and SK  -> ", data);
    }
});


// SCAN (fetches data across partitions)
var sParams = {
    TableName: 'dev_learn_create',
    FilterExpression: 'title = :filterword',
    ExpressionAttributeValues: {
        ':filterword': 'Sample Title from Batch Job'
    }
};

docClient.scan(sParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method query on scan() -> ", err);
    } else {
        console.log("Returned data from method query on scan() -> ", data);
    }
});


