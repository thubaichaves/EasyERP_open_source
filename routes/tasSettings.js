var express = require('express');
var router = express.Router();
var TasHandler = require('../handlers/tasSettings');
//var authStackMiddleware = require('../helpers/checkAuth');
var MODULES = require('../constants/modules');

module.exports = function (models, event) {
    'use strict';
    var moduleId = MODULES.TAS;
    var handler = new TasHandler(models, event);
    //var accessStackMiddleware = require('../helpers/access')(moduleId, models);

    //router.use(authStackMiddleware);
    //router.use(accessStackMiddleware);

    router.get('/', handler.getAll);
    router.get('/getForDd', handler.getForDd);

    router.post('/', handler.create);
    router.patch('/:id', handler.update);

    router.delete('/:id', handler.remove);

    return router;
};
