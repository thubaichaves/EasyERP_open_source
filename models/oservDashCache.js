module.exports = (function () {
    var mongoose = require('mongoose');

    var oservCacheSchema = mongoose.Schema({
        _id : {type: Number, default: 1},
        data: JSON
    }, {collection: 'oservCache'});

    mongoose.model('oservCache', oservCacheSchema);

    if (!mongoose.Schemas) {
        mongoose.Schemas = {};
    }

    mongoose.Schemas.oservCache = oservCacheSchema;
})();
