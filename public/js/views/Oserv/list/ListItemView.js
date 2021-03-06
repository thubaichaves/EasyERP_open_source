﻿define([
    'Backbone',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Oserv/list/ListTemplate.html'
], function (Backbone, _, listTemplate) {
    'use strict';

    var OservListItemView = Backbone.View.extend({
        el: '#listTable',

        initialize: function (options) {
            this.collection = options.collection;
        },

        render: function () {
            this.$el.append(_.template(listTemplate, {oservCollection: this.collection}));
        }
    });

    return OservListItemView;
});
