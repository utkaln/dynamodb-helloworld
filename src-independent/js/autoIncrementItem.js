const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

// UPDATE with auto increment
// Important - column name must exist, otherwise expect validation exception
var uParams = {
    TableName: 'dev_learn_create',
    Key: {
        user_id: "abcd1234",
        ts: 1663685706045
    },
    UpdateExpression: 'set #v = #v + :incr',
    ExpressionAttributeNames: {
        '#v': 'views'
    },
    ExpressionAttributeValues: {
        ':incr': 1
    }
};

docClient.update(uParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method update() -> ", err.code, err.statusCode);
    } else {
        console.log("Returned data from method update() -> ", data);
    }
});