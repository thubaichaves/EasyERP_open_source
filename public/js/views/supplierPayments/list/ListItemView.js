define([
    'Backbone',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/supplierPayments/list/ListTemplate.html',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/supplierPayments/list/ListTemplate.html',
    'helpers'
], function (Backbone, _, PaymentListTemplate, forWTrackListTemplate, helpers) {
    'use strict';

    var PaymentListItemView = Backbone.View.extend({
        el: '#listTable',

        initialize: function (options) {
            this.collection = options.collection;
            this.startNumber = (parseInt(this.collection.currentPage, 10) - 1) * this.collection.pageSize; // Counting the start index of list items
        },

        render: function () {
            this.$el.append(_.template(forWTrackListTemplate, {
                paymentCollection: this.collection.toJSON(),
                startNumber      : this.startNumber,
                currencySplitter : helpers.currencySplitter
            }));
        }
    });

    return PaymentListItemView;
});
