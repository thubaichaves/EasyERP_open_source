define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/integrationUnlinkedOrders/TopBarTemplate.html',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, CONSTANTS) {
    'use strict';

    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentHeader: 'Unlinked Orders',
        contentType  : CONSTANTS.INTEGRATIONUNLINKEDORDERS,
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
