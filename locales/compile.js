var _ = require('underscore');
var fs = require('fs');
var path = require('path');

var pathSupplied = './locales';
var extFilter = 'json';
var templateFolderPath = './public';
var clone;
var inclone;


_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

function extension(element) {
    var extName = path.extname(element);
    return extName === '.' + extFilter;
}

function traduz(d1, d2, langd) {
    var t;
    fs.readFile(d1, 'utf8', function (err, data) {
        try {
            t = _.template(data);
            fs.writeFile(d2,
                t(langd),
                function () {
                    //console.log(d2);
                });

            //console.log(d1);
        }
        catch (err) {
            //console.log(err);
            console.log('Erro: ' + d1);
            //console.log(_.keys(err));
            //console.log(t);
        }
    });
}

inclone = function (d1, d2, langd) {
    fs.readdir(d1, {withFileTypes: true}, function (err, list) {
        list.forEach(function (value) {
            if (value.isDirectory()) {
                clone(d1 + '/' + value.name, d2 + '/' + value.name, langd);
            }
            else {
                traduz(d1 + '/' + value.name, d2 + '/' + value.name, langd);
            }
        });
    });
}

clone = function (d1, d2, langd) {
    if (!fs.existsSync(d2)) {
        fs.mkdir(d2, function () {
            inclone(d1, d2, langd);
        });
    }
    else {
        inclone(d1, d2, langd);
    }
}


fs.readdir(pathSupplied, function (err, list) {
    list.filter(extension).forEach(function (value) {
        var lang = value.split('.')[0];
        var langd = require('./' + value);
        console.log(lang);
        //
        clone(templateFolderPath + '/_templates', templateFolderPath + '/' + lang + 'templates', langd);
        //
    });
    //
});
