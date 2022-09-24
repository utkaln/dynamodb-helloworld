const AWS = require("aws-sdk");
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();

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
                        ts: new Date().getTime() + 1,
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

// BATCH get (read)
var batchReadParams = {
    RequestItems: {
        'dev_learn_create':
        {

            Keys: [{
                user_id: 'abcd1234',
                ts: 1663685618660
            }]
        }
    }
};

docClient.batchGet(batchReadParams, (err, data) => {
    if (err) {
        console.log("Error occurred from method Batchget()-> ", err.code, err.message);
    } else {
        console.log("Returned data from method Batchget() -> ", JSON.stringify(data,null,2));
    }
});