define([
    'Backbone',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Oserv/CreateTemplate.html'
], function (Backbone, _, CreateTemplate) {

    var CreateView = Backbone.View.extend({
        el      : '#listTable',
        template: _.template(CreateTemplate),

        initialize: function (options) {
            this.render(options);
        },

        events: {},

        render: function (options) {
            this.$el.prepend(this.template(options));

            return this;
        }

    });

    return CreateView;
});
