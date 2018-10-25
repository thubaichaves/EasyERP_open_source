define([
    'Backbone'
], function (Backbone) {
    'use strict';

    var OservDashboardModel = Backbone.Model.extend({
        defaults: {
            departments: ['Android', 'iOS', 'Marketing', 'QA', 'Web', 'WP']
        }
    });

    return OservDashboardModel;
});
