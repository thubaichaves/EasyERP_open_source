module.exports = (function () {
    var mongoose = require('mongoose');
    var ObjectId = mongoose.Schema.Types.ObjectId;

    var oservSchema = new mongoose.Schema({
        ID         : Number,
        employee   : {type: ObjectId, ref: 'Employees', default: null},
        department : {type: ObjectId, ref: 'Department', default: null},
        oservs     : Object,
        month      : Number,
        year       : Number,
        vacArray   : Array,
        monthTotal : Number,
        dateByMonth: Number
    }, {collection: 'Oserv'});

    oservSchema.set('toJSON', {virtuals: true});

    mongoose.model('Oserv', oservSchema);

    if (!mongoose.Schemas) {
        mongoose.Schemas = {};
    }

    mongoose.Schemas.Oserv = oservSchema;
})();
