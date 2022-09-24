// practice call back
function addNumbers(a,b, callback){
    callback(a*b);
}
console.log ("calling callback method");
addNumbers(50000,70, (c) => console.log("Value of C " + c));


// practice promise
function addNumbersPromise(a,b){
    return new Promise((resolve, reject) => {
        let successCode = {
            responseCode: 200,
            message: "Success",
            value: (a+b)
        };

        let errorCode = {
            responseCode: 400,
            message: "Error",
            value: null
        };
        if (typeof a === 'number' && typeof b === 'number'){
            resolve(successCode);
        } else {
            errorCode.value = "Input params not number";
            reject(errorCode);
        }
    });
}

console.log ("calling promise method");
addNumbersPromise(50,'abc').then(
    (successCode) => {
        console.log(successCode);
    },
    (errorCode) => {
        console.log(errorCode);
    }
);


// chaining promises
console.log ("calling chaining promise method");
addNumbersPromise(50,'abc').then(
    (successCode) => {
        console.log("First promise came back successfully ...");
        console.log(successCode);
        addNumbersPromise(50,'abc');
    }
).then(
    (successCode) => {
        console.log("Second promise came back successfully ...");
        console.log(successCode);
    }
).catch (
   (errorCode) => console.log ("error -> ",errorCode)
);