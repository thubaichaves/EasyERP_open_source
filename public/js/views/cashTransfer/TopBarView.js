define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/cashTransfer/TopBarTemplate.html'
], function (_, BaseView, ContentTopBarTemplate) {
    'use strict';

    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : 'cashTransfer',
        contentHeader: 'Transferência de Caixa',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
