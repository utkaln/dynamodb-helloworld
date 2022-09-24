const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

// CREATE ITEM CONDITIONALLY
var cParams = {
    TableName: 'dev_learn_create',
    Item: {
        user_id: "abcd1234",
        //SUCCESS scenario
        //ts: new Date().getTime(), 
        //FAILURE scenario
        ts: 1663685706045,
        title: "Sample Title from Conditional Put",
        content: "Sample Data"
    },
    ConditionExpression: `#t <> :t`,
    ExpressionAttributeNames: {
        '#t': 'ts'
    },
    ExpressionAttributeValues: {
        ':t': 1663685706045
    }
};

docClient.put(cParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method put() -> ", err.code, err.statusCode);
    } else {
        console.log("Returned data from method put() -> ", data);
    }
});