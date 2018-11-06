define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Employees/TopBarTemplate.html',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Notes/importTemplate.html'
], function (_, BaseView, ContentTopBarTemplate, importTemplate) {
    'use strict';

    var TopBarView = BaseView.extend({
        el            : '#top-bar',
        contentType   : 'Employees',
        template      : _.template(ContentTopBarTemplate),
        importTemplate: _.template(importTemplate)
    });

    return TopBarView;
});
