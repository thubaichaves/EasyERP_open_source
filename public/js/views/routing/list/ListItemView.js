﻿define([
    'Backbone',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/routing/list/ListTemplate.html'
], function (Backbone, _, ListTemplate) {
    'use strict';

    var ListItemView = Backbone.View.extend({
        el: '#listTable',

        initialize: function (options) {
            this.collection = options.collection;
        },

        render: function () {
            this.$el.append(_.template(ListTemplate, {
                collection: this.collection.toJSON()
            }));
        }
    });

    return ListItemView;
});
