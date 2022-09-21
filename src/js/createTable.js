const AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-1'});
const dynamodb = new AWS.DynamoDB();
/*
************************************************************
DO NOT BLINDLY RUN, AS THIS WILL CREATE AND UPDATE TABLES
************************************************************
*/

// Create Table
dynamodb.createTable({
    TableName: "dev_learn_create",
    AttributeDefinitions: [
        {
            AttributeName: "user_id",
            AttributeType: "S"
        },
        {
            AttributeName: "ts",
            AttributeType: "N"
        }
    ],
    KeySchema: [
        {
            AttributeName: "user_id",
            KeyType: "HASH"
        },
        {
            AttributeName: "ts",
            KeyType: "RANGE"
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
}, (err,data) => {
    if(err){
        console.log("Error occurred -> ", err);
    } else {
        console.log("Returned data from method createTable() -> ", data);
    }
});

// Delete table created above

