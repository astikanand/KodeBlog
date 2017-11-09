//=========================== MongoDB Connection ==============================//
var mongoose = require('mongoose');
var dbconnection = mongoose.connect('mongodb://localhost/kodeblog', {
    useMongoClient: true,
    // other options
});
dbconnection.on('error', console.error.bind(console, 'Connection Error:'));
dbconnection.once('open', function(){
    console.log('Connected To MongoDB database');
});
