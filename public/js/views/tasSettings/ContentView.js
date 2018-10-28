define([
    'Backbone',
    'jQuery',
    'Underscore',
    'text!templates/tasSettings/IndexTemplate.html',
    'async',
    'dataService',
    'collections/tasSettings/filterCollection',
    'views/tasSettings/TasListView'
], function (Backbone, $, _, DashboardTemplate, async, dataService, TasCollection, TasListView) {
    'use strict';

    var ContentView = Backbone.View.extend({
        contentType: 'tasSettings',
        actionType : 'Content',
        template   : _.template(DashboardTemplate),
        el         : '#content-holder',
        initialize : function (options) {
            this.startTime = options.startTime;

            this.tasCollection = new TasCollection();
            this.tasCollection.bind('reset', this.renderTas, this);

            this.render();
        },

        events: {
            'click .acountingList-js li': 'chooseDetailes'
        },

        renderTas: function () {
            this.$el.find('[data-id="tas"]').addClass('active');
            new TasListView({
                collection: this.tasCollection
            }).render();
        },

        chooseDetailes: function (e) {
            var $target = $(e.target);
            var $thisEl = this.$el;

            var name;

            e.preventDefault();

            if (!$target.hasClass('_acountingListItem')) {
                $target = $target.closest('._acountingListItem');
            }

            $thisEl.find('.acountingList-js .active').removeClass('active');
            $target.addClass('active');

            name = $target.attr('data-id');

            $thisEl.find('.tabs').addClass('hidden');

            $thisEl.find('#' + name + '-holder').removeClass('hidden');

        },

        render: function () {
            this.$el.html(this.template({
                data: [{
                    _id : 'tas',
                    name: 'Tasex'
                }, {
                    _id : 'default',
                    name: 'Default Settings'
                }]
            }));

            return this;
        }

    });

    return ContentView;
});
