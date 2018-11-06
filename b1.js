
var express = require('express');
var app = express();
var http = require('http');

var httpServer = http.createServer(app);

var Sequelize = require('sequelize');
var models={};

models.sequelize = require('./modulos/rdb')();

var User = models.sequelize.define('reservation', {
    startdate: {
        type: Sequelize.DataTypes.TIME
    },
    enddate: {
        type: Sequelize.DataTypes.TIME
    },
    campgroundid: {
        type: Sequelize.DataTypes.INTEGER
    }
},{tableName:'reservation',timestamps:false});

app.get('/getDBx', function (req, res) {
    /*res.send(200, {
        "startDate": "2018-10-30T12:51:28.110Z",
        "endDate": "2018-10-30T12:51:28.110Z",
        "campgroundId": 455763758
    });*/
    User.findAll().then(users => {
        res.status(200).send(users);
    })
})


app.listen(7777, function () {
    console.log('ok');
})

