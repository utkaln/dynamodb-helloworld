const AWS = require("aws-sdk");
const _ = require("underscore");
const async = require("async"); //needed for loops to run in async mode
AWS.config.update({ region: 'us-east-1' });
const docClient = new AWS.DynamoDB.DocumentClient();


var startKey = [];
var results = [];
var pages = 0;

// takes parameter iterative function, truth test, callback

//TODO - Not looping
async.doWhilst(
    (callback)=> {
        let pageParams = {
            TableName: "dev_learn_create",
            Limit: 3
        };

        if(!_.isEmpty(startKey)){
            pageParams.ExclusiveStartKey = startKey;
        }

        docClient.scan(pageParams, (err, data) => {
            if (err) {
                console.log("Error occurred from method query on scan() -> ", err);
                callback(err,{});
            } else {
                console.log("Returned data from method query on scan() -> ", data);

                // If LastEvaluatedKey is not empty, then there is more page of data
                if(typeof data.LastEvaluatedKey !== 'undefined'){
                    startKey = data.LastEvaluatedKey;
                } else {
                    startKey = [];
                }

                // if scan returned results add to results object by appending
                if(!_.isEmpty(data.Items)){
                    results = _.union(results, data.Items);
                }

                pages++;
                console.log('Intermittent result found -> ', results);
                callback(null,results);
                
            }
        });
    },
    // truth test for the loop
    ()=> {
        if(_.isEmpty(startKey)){
            return false;
        } else {
            return true;
        }
    },

    //callback
    (err, data) => {
        console.log('control reached line 61');
        if (err) {
            console.log("Error occurred from doWhilst() -> ", err.code, err.statusCode);
        } else {
            console.log("Returned data from method doWhilst() -> ", data);
            console.log("Item Count -> ", data.lentgh);
            console.log("Pages count -> ", pages);
        }
    }
); 




