define([
    'Backbone',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/scheduledPay/list/ListTemplate.html'
], function (Backbone, _, listTemplate) {
    'use strict';

    var ScheduledPayListItemView = Backbone.View.extend({
        el: '#listTableScheduledPay',

        initialize: function (options) {
            this.page = parseInt(options.page, 10);

            this.collection = options.collection;
            this.page = isNaN(this.page) ? 1 : this.page;
            this.startNumber = (this.page - 1) * options.itemsNumber;
        },

        render: function (options) {
            var el;

            options = options || {};

            el = options.thisEl || this.$el;

            el.append(_.template(listTemplate, {
                scheduledPays: this.collection.toJSON(),
                startNumber  : this.startNumber
            }));
        }
    });

    return ScheduledPayListItemView;
});
