var User = require('./models.js')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

// List All Users on User Home Page
module.exports.index = function (req, res) {
    res.send('User Home Page');
}


// User Registration
module.exports.register = function (req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    var userinfo = {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: hash
    }

    User.create(userinfo, function (err, doc) {
        if(err){
            res.status(401).json(err);
        }
        res.status(201).json(doc);
    });
}

// User Login
module.exports.login = function (req, res) {

    User.findOne({ $or:[ {'username': req.body.username}, {'email': req.body.username} ] }, function (err, user) {
        var response = {}
        if(err){
            response.status = 401;
            response.message = 'Failed';
        }
        if(user && bcrypt.compareSync(req.body.password, user.password)){
            var token = jwt.sign({
                username: user.username,
                name: user.name
            }, 'secret', { expiresIn: 60*60});

            response.status = 201;
            response.message = token;
            //response.message = 'Logged in Successfully!!'
        }else{
            response.status = 401;
            response.message = 'Invalid Credentials!!!'
        }
        res.status(response.status).json({'message': response.message});
    });
}


// Update the User
module.exports.edit = function (req, res) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(req.body.password, salt);

    var userinfo = {
        name: req.body.name,
        password: hash
    }

    var user = {'username': req.body.username}

    User.update(user, userinfo, function(err, doc){
        if(err){
            res.status(401).json(err);
        }
        res.status(201).json({'message': 'User Updated Sucessfully!!'});
    });
}


// Delete the User
module.exports.delete = function (req, res) {

    var user = {'username': req.username}

    User.remove(user, function(err, success){
        if(err){
            res.status(401).json(err);
        }
        res.status(201).json({'message': 'User Deleted Sucessfully!!'});
    });
}
