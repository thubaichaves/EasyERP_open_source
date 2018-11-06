define([
    'Backbone',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/PayrollExpenses/CreateTemplate.html'
], function (Backbone, _, CreateTemplate) {

    var CreateView = Backbone.View.extend({
        el      : '#payRoll-listTable',
        template: _.template(CreateTemplate),

        initialize: function (options) {
            this.model = options.model;
            this.render();
        },

        events: {},

        render: function () {
            this.$el.prepend(this.template(this.model));

            return this;
        }

    });

    return CreateView;
});
