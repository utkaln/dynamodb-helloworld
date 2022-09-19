const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.json());

// this makes the http server run on port 3000
app.listen(3000, ()=> {console.log("App listening on port 3000")});

// GET method
app.get('/', (req,res)=> {
    console.log('Root path called');
    res.send("Home Page !");
});

// POST method
app.post('/resource', (req,res)=> {
    console.log('POST method, /resource path is invoked');
    let body = req.body;
    body.message = "Hello " + body.name ;
    res.json(body);
});

// Serve static web page by exposing a folder
app.use(express.static(__dirname));

