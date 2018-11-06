var _ = require('underscore');
var fs = require('fs');
var path = require('path');

var pathSupplied = './locales';
var extFilter = 'json';
var templateFolderPath = './public';
var sortJson = require('sort-json');
var AWS = require('aws-sdk');
var translate = new AWS.Translate({
    accessKeyId: 'AKIAIXNKAFDVODSN3R2A',
    secretAccessKey: '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', region: 'us-east-2'
});
var async = require("async");

//const options = { ignoreCase: true, reverse: true, depth: 1};

async function init() {
    console.log(1)
    await sleep(1000)
    console.log(2)
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

var rastreiaa = function () {
    //let dict = [];
    let dict = {};
    let ptbrdict = {};

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    function extension(element) {
        var extName = path.extname(element);
        return extName === '.' + extFilter;
    }

    function replacer(str, offset, s) {
        var strr = str.replace(/\{/g, '')
            .replace(/\}/g, '')
            .replace(/[^a-zA-Z]/g, '_');
        //
        dict[strr] = str.replace(/_/g, ' ')
            .replace(/\{/g, '')
            .replace(/\}/g, '');

        return '{{' + strr + '}}';
    }

    function traduz(d1, d2, langd) {

    }

    rastreiad = function (d1, d2, langd) {
        console.log(d1);
        var list = fs.readdirSync(d1, {withFileTypes: false});
        var some = list.slice();
        (function next() {
            if (!some.length) {
                return;
            }
            (function (value) {
                //console.log('value: '+value);
                if (fs.lstatSync(d1 + '/' + value).isDirectory()) {
                    rastreiad(d1 + '/' + value, '', '');
                }
                else {
                    try {
                        var data = fs.readFileSync(d1 + '/' + value, 'utf8');

                        fs.writeFileSync(d1 + '/' + value,
                            data.replace(/\{\{(.+?)\}\}/g, replacer));
                    }
                    catch (err) {
                        console.log('Erro: ' + d1);
                        console.log(some);
                    }
                }
                next();
            })(some.pop());
        })();
    }


    rastreiad(templateFolderPath + '/_templates', '', '');
    console.log(dict);
    fname = './locales/dict_' + _.now() + '.jsonx';
    fs.writeFileSync(fname, JSON.stringify(dict));
    sortJson.overwrite(fname);

    //

    async.forEachOfLimit(dict, 15, (value, key, callback) => {
        console.log('*');
        translate.translateText({
            SourceLanguageCode: 'en',
            TargetLanguageCode: 'pt',
            Text: value
        }, function (err, data) {
            if (err) callback(err, err.stack);
            else {
                console.log(key + '=' + data['TranslatedText']);
                ptbrdict[key] = data['TranslatedText'];

                sleep(1000);
                callback();
            }
        });
    }, err => {
        if (err) {
            console.error('erro: ' + err.message);
            console.log(err);
        }
        var oldd={};
        try{oldd=require('./locales/ptbr.json');}catch{}
        _.extend(ptbrdict,oldd);
        fs.writeFileSync(fname + 'ptbr', JSON.stringify(ptbrdict));
        sortJson.overwrite(fname + 'ptbr');
    });


}

rastreiaa();
