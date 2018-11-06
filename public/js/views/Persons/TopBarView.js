define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Persons/TopBarTemplate.html',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Notes/importTemplate.html'
], function (_, BaseView, ContentTopBarTemplate, importTemplate) {
    'use strict';
    var TopBarView = BaseView.extend({
        el            : '#top-bar',
        contentType   : 'Persons',
        template      : _.template(ContentTopBarTemplate),
        importTemplate: _.template(importTemplate),

        events: {
            'click #magentoImport': 'magentoImport',
            'click #magentoExport': 'magentoExport'
        },

        initialize: function () {
            this.contentType = 'Persons';
            this.render();
        },

        magentoImport: function (event) {
            event.preventDefault();
            this.trigger('importFromMagento');
        },

        magentoExport: function (event) {
            event.preventDefault();
            this.trigger('exportToMagento');
        }
    });

    return TopBarView;
});
