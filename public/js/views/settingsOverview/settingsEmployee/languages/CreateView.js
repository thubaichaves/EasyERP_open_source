define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/settingsOverview/settingsEmployee/languages/CreateTemplate.html',
    'models/LanguagesModel',
    'helpers/ga'
], function ($, _, Backbone, CreateTemplate, LanguagesModel, ga) {

    var CreateView = Backbone.View.extend({
        el         : '#content-holder',
        contentType: 'languages',
        template   : _.template(CreateTemplate),

        initialize: function (options) {
            this.collection = options.collection;

            this.render();
        },

        saveItem: function () {
            var self = this;
            var model;
            var $currentEl = this.$el;
            var name = $.trim($currentEl.find('#languageName input').val());
            var data = {};

            if (!name) {
                return App.render({
                    type   : 'error',
                    message: 'Name can\'t be empty'
                });
            }
            data = {
                name: name
            };

            model = new LanguagesModel(data);
            model.save({
                headers: {
                    mid: 103 // ?
                },
                wait   : true,
                success: function (res) {
                    self.hideDialog();
                    self.collection.add(res);
                },

                error: function (model, xhr) {
                    self.errorNotification(xhr);
                }
            });
        },

        hideDialog: function () {
            $('.edit-dialog').remove();
            $('.add-group-dialog').remove();
            $('.add-user-dialog').remove();
            $('.crop-images-dialog').remove();
        },

        render: function () {
            var formString = this.template();
            var self = this;

            this.$el = $(formString).dialog({
                autoOpen   : true,
                dialogClass: 'edit-dialog',
                title      : 'Create Language',
                width      : '900px',
                position   : {within: $('#wrapper')},
                buttons    : [{
                    id   : 'create-language-dialog',
                    class: 'btn blue',
                    text : 'Create',
                    click: function () {
                        self.saveItem();
                        ga && ga.trackingEditConfirm(self.contentType);
                    }
                }, {
                    text : 'Cancel',
                    class: 'btn',
                    click: function () {
                        self.hideDialog();
                        ga && ga.trackingEditCancel(self.contentType);
                    }
                }]
            });

            this.delegateEvents(this.events);

            return this;
        }

    });

    return CreateView;
});
