'use strict';

var mongoose = require('mongoose');
var tasexSchema = mongoose.Schemas.tasex;

module.exports = function (models) {
    return new function () {
        this.create = function (options, callback) {
            var dbName;
            var Tasex;
            var tasex;
            var err;

            if (typeof options === 'function') {
                callback = options;
                options = {};
            }

            if (!callback || typeof callback !== 'function') {
                callback = function () {
                };
            }

            dbName = options.dbName;
            delete options.dbName;

            if (!dbName) {
                err = new Error('Invalid input parameters');
                err.status = 400;

                return callback(err);
            }

            Tasex = models.get(dbName, 'tasex', tasexSchema);

            tasex = new Tasex(options);
            tasex.save(function (err, tax) {
                if (err) {
                    return callback(err);
                }

                callback(null, tax);
            });
        };

        this.findOne = function (query, options, callback) {
            var Tasex;
            var dbName;
            var err;

            if (typeof options === 'function') {
                callback = options;
                options = {};
            }

            if (!callback || typeof callback !== 'function') {
                callback = function () {
                };
            }

            dbName = options.dbName;
            delete options.dbName;

            if (!dbName || !query) {
                err = new Error('Invalid input parameters');
                err.status = 400;

                return callback(err);
            }

            Tasex = models.get(dbName, 'tasex', tasexSchema);
            Tasex.findOne(query, options, function (err, order) {
                if (err) {
                    return callback(err);
                }

                callback(null, order);
            });
        };

        this.createMulti = function (options, callback) {
            var Model;
            var dbName;
            var err;

            if (typeof options === 'function') {
                callback = options;
                options = {};
            }

            if (typeof callback !== 'function') {
                callback = function () {
                    return false;
                };
            }

            dbName = options.dbName;
            delete options.dbName;

            if (!dbName) {
                err = new Error('Invalid input parameters');
                err.status = 400;

                return callback(err);
            }

            Model = models.get(dbName, 'tasex', tasexSchema);

            Model.collection.insertMany(options.tasex, function (err) {
                if (err) {
                    return callback(err);
                }

                callback();
            });
        }
    };
};
