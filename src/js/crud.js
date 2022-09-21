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


// BATCH WRITE PUT, DELETE
var batchParams = {
    RequestItems: {
        'dev_learn_create': [
            {
                DeleteRequest: {
                    Key: {
                        user_id: 'abcd1234',
                        ts: 1663611992090
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'abcd1234',
                        ts: new Date().getTime(),
                        title: "1 Sample Title from Batch Job",
                        content: "1 Sample Data from Batch Job"
                    }
                }
            },
            {
                PutRequest: {
                    Item: {
                        user_id: 'abcd1234',
                        ts: new Date().getTime()+1,
                        title: "2 Sample Title from Batch Job",
                        content: "2 Sample Data from Batch Job"
                    }
                }
            }
        ]
    }
};

docClient.batchWrite(batchParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method Batch Write()-> ", err.code, err.message);
    } else {
        console.log("Returned data from method Batch Write() -> ", data);
    }
});



