const { DynamoDB } = require("aws-sdk");
const AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-1'});
const dynamodb = new AWS.DynamoDB();

// List existing tables
dynamodb.listTables({}, (err,data) => {
    if(err){
        console.log("Error occurred -> ", err);
    } else {
        console.log("Returned data from method listTables() -> ", data);
    }
});

// Describe a given table name
dynamodb.describeTable({
    TableName: "dev_learn_create"
},(err,data) => {
    if(err){
        console.log("Error occurred -> ", err);
    } else {
        console.log("Returned data from method describeTable() -> ", JSON.stringify(data,null,2));
    }
});