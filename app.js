const express = require('express');
const path = require('path');
const user_router = require('./modules/user/router.js');
var bodyParser = require('body-parser')
require('./config/db_connect.js');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//========================== Serve Static Files ===============================//
app.use(express.static(path.join(__dirname, 'public')));



//==================================== Routes =================================//
// Main Home
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public'));
});

// User Routes
app.use('/user', user_router);



//==================================== Server Running =========================//
app.listen(3000, function(){
    console.log('Example app listening on port 3000!');
});
