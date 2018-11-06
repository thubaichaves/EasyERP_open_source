define([
    'Underscore',
    'jQuery',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/taxSettings/TopBarTemplate.html'
], function (_, $, BaseView, TopBarTemplate) {
    'use strict';

    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : 'taxSettings',
        contentHeader: 'Impostos',
        actionType   : null, // Content, Edit, Create
        template     : _.template(TopBarTemplate),

        getIdFromHash: function (hash) {
            var hashItems = hash.split('/');
            return hashItems[hashItems.length - 1];
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            $('title').text(this.contentHeader);
            this.$el.html(this.template({contentType: this.contentHeader}));

            return this;
        }
    });

    return TopBarView;
});
