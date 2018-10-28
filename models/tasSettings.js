module.exports = (function () {
    'use strict';
    var mongoose = require('mongoose');

    var tasexSchema = new mongoose.Schema({
        name     : {type: String, default: ''},
        fullName : {type: String, default: ''},
        code     : {type: String, default: ''},
        rate     : {type: Number, default: 0},
        sequence : {type: Number, default: 0},
        country  : {type: String, default: 0},
        isDefault: {type: Boolean, default: false}
    }, {collection: 'tasex'});

    mongoose.model('tasex', tasexSchema);

    if (!mongoose.Schemas) {
        mongoose.Schemas = {};
    }

    mongoose.Schemas.tasex = tasexSchema;
})();

