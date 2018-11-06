var mongoose = require('mongoose');
var RESPONSES = require('../constants/responses');
var tasexSchema = mongoose.Schemas.tasex;
var objectId = mongoose.Types.ObjectId;
var _ = require('underscore');
var async = require('async');
//var Sequelize = require('sequelize')

var Module = function (models, event) {
    'use strict';
    /*var User = models.sequelize.define('user', {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        }
    });*/

    var conn = mongoose.createConnection('mongodb://localhost:27017/nisk');

        var contatosSchema_ = new mongoose.Schema({
            NOME     : {type: String, default: ''},
            ALIAS : {type: String, default: ''}
        }, {collection: 'contatos'});
    var contatos = conn.model('contatos', contatosSchema_);

        if (!mongoose.Schemas) {
            mongoose.Schemas = {};
        }


    this.getAll = function (req, res, next) {
        /*res.status(200).send({
            "startDate": "2018-10-30T12:51:28.110Z",
            "endDate": "2018-10-30T12:51:28.110Z",
            "campgroundId": 455763758
        });*/
       /* User.findAll().then(users => {
            res.status(200).send(users);
        })*/

        /*contatos.find({ "NOME": /.*al.*!/i })
            .select('NOME       ').exec(function (err, result) {
            if (err) {
                return next(err);
            }
            res.status(200).send({data: result});
        });*/
    };

    this.getForDd = function (req, res, next) {

// force: true will drop the table if it already exists
        /*User.sync({force: true}).then(() => {
            // Table created
            return User.create({
                firstName: 'John',
                lastName: 'Hancock'
            });
        });
        res.status(200).send({});*/
        var Model = models.get(req.session.lastDb, 'tasex', tasexSchema);

        Model.aggregate([{
            $project: {
                name     : '$fullName',
                rate     : 1,
                isDefault: 1
            }
        }, {
            $sort: {isDefault: -1}
        }], function (err, result) {
            if (err) {
                return next(err);
            }
            res.status(200).send({data: result});
        });
    };

    this.update = function (req, res, next) {
        res.status(200).send({});
        /*var Model = models.get(req.session.lastDb, 'tasex', tasexSchema);
        var body = req.body;
        var id = req.params.id;
        var updateOther = false;

        if (body.isDefault) {
            updateOther = true;
        }

        Model.findByIdAndUpdate(id, body, {new: true}, function (err, result) {
            if (err) {
                return next(err);
            }

            if (updateOther) {
                Model.update({_id: {$ne: id}}, {$set: {isDefault: false}}, {multi: true}, function (err) {
                    if (err) {
                        return next(err);
                    }
                });
            }

            res.status(200).send(result);
*/
    };

    this.create = function (req, res, next) {
        res.status(200).send({});
        /*var Model = models.get(req.session.lastDb, 'tasex', tasexSchema);
        var body = req.body;
        var updateOther = false;
        var isCreate = true;
        var item;

        /*function checkDefault(wCb) {
            if (!body.isDefault) {
                return wCb();
            }

            Model.findOne({isDefault: true}, function (err, result) {
                if (err) {
                    return wCb(err);
                }

                if (result) {
                    isCreate = false;
                }

                wCb();
            });
        }

        function createTas(wCb) {
            var err;
            res.status(200).send({});
        */
                /* (!isCreate) {
                        err = new Error('Old default tax was overwritten by new one');
                        err.status = 400;

                        return wCb(err);
                    }*/
/*
            Model.count({}, function (err, count) {
                body.sequence = count++;

                if (body.isDefault) {
                    updateOther = true;
                }

                item = new Model(body);
                item.save(function (err, result) {
                    if (err) {
                        return wCb(err);
                    }

                    if (updateOther) {
                        Model.update({_id: {$ne: result._id}}, {$set: {isDefault: false}}, {multi: true}, function (err) {
                            if (err) {
                                return wCb(err);
                            }
                        });
                    }

                    wCb(null, result);
                });
            });
        }

        async.waterfall(
            [
                //checkDefault,
                createTas
            ], function (err, result) {
                if (err) {
                    return next(err);
                }

                res.status(200).send(result);
            });*/
    };

    this.remove = function (req, res, next) {

        var err;
        res.status(200).send({});
        /*
        var Model = models.get(req.session.lastDb, 'tasex', tasexSchema);
        var id = req.params.id;

        Model.findByIdAndRemove(id, function (err, result) {
            if (err) {
                return next(err);
            }

            res.status(200).send(result);
        });*/
    };
};

module.exports = Module;
