define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/orgSettings/TopBarTemplate.html'
], function (_, BaseView, TopBarTemplate) {
    'use strict';

    var TopBarView = BaseView.extend({
        el         : '#top-bar',
        contentType: 'Organization Profile',
        actionType : null, // Content, Edit, Create
        template   : _.template(TopBarTemplate),

        getIdFromHash: function (hash) {
            var hashItems = hash.split('/');
            return hashItems[hashItems.length - 1];
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            $('title').text(this.contentType);
            this.$el.html(this.template({contentType: this.contentType}));

            return this;
        }
    });

    return TopBarView;
});
