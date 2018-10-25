var express = require('express');
var router = express.Router();
var VocationHandler = require('../handlers/oserv');
var authStackMiddleware = require('../helpers/checkAuth');
var MODULES = require('../constants/modules');

module.exports = function (event, models) {
    'use strict';
    var handler = new VocationHandler(event, models);
    var moduleId = MODULES.OSERV;
    var accessStackMiddleware = require('../helpers/access')(moduleId, models);

    /**
     *@api {get} /oserv/ Request Oserv
     *
     * @apiVersion 0.0.1
     * @apiName getOserv
     * @apiGroup Oserv
     *
     * @apiParam (?Field=value) {String} year="Line Year"
     * @apiParam (?Field=value) {String} employee="55b92ad221e4b7c40f00004f" Unique id of Employee
     *
     * @apiSuccess {Object} Oserv
     * @apiSuccessExample Success-Response:
HTTP/1.1 200 OK
{
      "data": [

      ],
      "stat": {
        "leaveDays": 0,
        "workingDays": 282,
        "oserv": 0,
        "personal": 0,
        "sick": 0,
        "education": 0
      }
}
     */
    router.get('/', authStackMiddleware, accessStackMiddleware, handler.getForView);
    router.get('/getYears', authStackMiddleware, accessStackMiddleware, handler.getYears);
    router.get('/getStatistic', authStackMiddleware, accessStackMiddleware, handler.getStatistic);

    router.post('/', authStackMiddleware, accessStackMiddleware, handler.create);
    router.patch('/', authStackMiddleware, accessStackMiddleware, handler.putchBulk);

    router.delete('/:id', authStackMiddleware, accessStackMiddleware, handler.remove);

    return router;
};
