define([
    'Backbone',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Error/ErrorPageTemplate.html'
], function (Backbone, _, ErrorPageTemplate) {
    'use strict';

    var ErrorView = Backbone.View.extend({
        el      : '#content-holder',
        template: _.template(ErrorPageTemplate),

        initialize: function (options) {
            this.errorMessage = options.error.statusText;
        },

        render: function () {
            this.$el.html(this.template({errorMessage: this.errorMessage}));
            return this;
        }
    });

    return ErrorView;
});
