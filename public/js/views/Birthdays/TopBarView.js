define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Birthdays/TopBarTemplate.html'
], function (_, BaseView, ContentTopBarTemplate) {
    'use strict';

    var TopBarView = BaseView.extend({
        el      : '#top-bar',
        contentType  : 'Birthdays',
        template: _.template(ContentTopBarTemplate)
    });
    return TopBarView;
});
