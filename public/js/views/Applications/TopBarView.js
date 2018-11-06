define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Applications/TopBarTemplate.html'
], function (_, BaseView, ContentTopBarTemplate) {
    'use strict';

    var TopBarView = BaseView.extend({
        el         : '#top-bar',
        contentType: 'Applications',
        template   : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
