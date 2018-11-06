define([
    'jQuery',
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/productSettings/TopBarTemplate.html',
    'constants'
], function ($, _, TopBarBase, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = TopBarBase.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.PRODUCTS_SETTINGS,
        contentHeader: 'Product Options',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
