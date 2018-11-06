define([
    'jQuery',
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/productType/TopBarTemplate.html',
    'constants'
], function ($, _, TopBarBase, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = TopBarBase.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.PRODUCTTYPE,
        contentHeader: 'Tipos de Produto',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
