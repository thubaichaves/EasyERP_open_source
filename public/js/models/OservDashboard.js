define([
    'Backbone',
    'collections/Dashboard/employeeDashboardData'
], function (Backbone, EmployeeDashboardData) {
    'use strict';
    var OservDashboard = Backbone.Model.extend({
        idAttribute: 'department._id',
        parse      : function (model) {
            if (model.employees) {
                model.employees = new EmployeeDashboardData(model.employees);
                model.employees = model.employees.toJSON();
            }

            return model;
        }
    });

    return OservDashboard;
});
