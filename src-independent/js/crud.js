const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

// CREATE
var cParams = {
    TableName: 'dev_learn_create',
    Item: {
        user_id: "abcd1234",
        ts: new Date().getTime(),
        title: "Sample Title",
        content: "Sample Data"
    }
};

docClient.put(cParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method put() -> ", err.code, err.statusCode);
    } else {
        console.log("Returned data from method put() -> ", data);
    }
});


// READ 

var rParams = {
    TableName : 'dev_learn_create',
    Key: {
      user_id: 'abcd1234',
      ts: 1663685706045
    }
  };

docClient.get(rParams,(err,data) => {
    if(err){
        console.log("Error occurred from method get() -> ", err.code, err.message);
    } else {
        console.log("Returned data from method get() -> ", data);
    }
});


// UPDATE
var uParams = {
    TableName: 'dev_learn_create',
    Key: {
        user_id: "abcd1234",
        ts: 1663611470
    },
    UpdateExpression: 'set #t = :t',
    ExpressionAttributeNames: {
        '#t': 'title'
    },
    ExpressionAttributeValues: {
        ':t': "New Title"
    }
};

docClient.update(uParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method update() -> ", err.code, err.statusCode);
    } else {
        console.log("Returned data from method update() -> ", data);
    }
});


// DELETE
var dParams = {
    TableName: 'dev_learn_create',
    Key: {
        user_id: "abcd1234",
        ts: 1663612942535
    }
};

docClient.delete(dParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method delete()-> ", err.code, err.statusCode);
    } else {
        console.log("Returned data from method delete() -> ", data);
    }
});







