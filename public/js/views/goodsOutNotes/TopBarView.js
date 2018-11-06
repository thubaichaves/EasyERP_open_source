define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/customerPayments/TopBarTemplate.html',
    'custom',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, Custom, CONSTANTS) {
    'use strict';

    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.GOODSOUTNOTES,
        contentHeader: 'Goods-Out Notes',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
