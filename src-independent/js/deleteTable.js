const AWS = require("aws-sdk");
AWS.config.update({region: 'us-east-1'});
const dynamodb = new AWS.DynamoDB();
/*
************************************************************
DO NOT BLINDLY RUN, AS THIS WILL DELETE TABLE
************************************************************
*/

// Delete Table
dynamodb.deleteTable({
    TableName: "dev_learn_create"
}, (err,data) => {
    if(err){
        console.log("Error occurred -> ", err.code,err.statusCode);
    } else {
        console.log("Returned data from method createTable() -> ", data);
    }
});


