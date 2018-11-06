define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/dialogViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/settingsOverview/productDetails/warehouse/CreateTemplate.html',
    'models/warehouse',
    'constants',
    'populate',
    'dataService'
], function ($, _, Backbone, ParentView, CreateTemplate, Model, CONSTANTS, populate, dataService) {

    var CreateView = ParentView.extend({
        contentType: CONSTANTS.WAREHOUSE,
        responseObj: {},

        events: {
          'change #main': 'toggleMessage'

        },

        initialize: function (options) {
            var self = this;

            this.model = options.model || Model;
            this.title = options.title || 'Warehouse';
            this.dialogWidth = options.width || '800px';
            this.template = options.template || CreateTemplate;
            this.action = options.action;
            this.id = options.id;
            this.event = options.event;
            this.eventChannel = options.eventChannel;
            this.collection = options.collection;

            self.render();
        },

        toggleMessage: function () {
            this.$el.find('.checkText').toggleClass('hidden');
        },

        keyDownHandler: function (e) {
            switch (e.which) {
                case 13:
                    this.saveItem();
                    e.stopPropagation();
                    e.preventDefault();
                    break;
                default:
                    break;
            }
        },

        chooseOption: function (e) {
            var $target = $(e.target);
            var id = $target.attr('id');
            var text = $target.text();
            var $ul = $target.closest('ul');
            var $element = $ul.closest('a');

            $element.attr('data-id', id);
            $element.text(text);

            $ul.remove();

            return false;
        },

        saveItem: function () {
            var self = this;
            var $el = this.$el;
            var model;
            var data = {};
            var name = $.trim($el.find('#name').val());
            var street = $.trim($el.find('#street').val());
            var city = $.trim($el.find('#city').val());
            var state = $.trim($el.find('#state').val());
            var zip = $.trim($el.find('#zip').val());
            var country = $.trim($el.find('#country').attr('data-id'));
            var account = $el.find('#account').attr('data-id');
            var own = $el.find('#isOwn').prop('checked');
            var main = $el.find('#main').prop('checked');
            var groupingA = $.trim($el.find('#A').val()) || null;
            var groupingB = $.trim($el.find('#B').val()) || null;
            var groupingC = $.trim($el.find('#C').val()) || null;
            var groupingD = $.trim($el.find('#D').val()) || null;
            var array = [];
            var nameLoc;
            var zoneName = $.trim($el.find('#zone').val());
            var modelName = '';
            var zone = $el.find('#zones').attr('data-id');

            if (groupingA) {
                array.push(groupingA);
            }

            if (groupingB) {
                array.push(groupingB);
            }

            if (groupingC) {
                array.push(groupingC);
            }

            if (groupingD) {
                array.push(groupingD);
            }

            nameLoc = array.join('.');

            if (this.action === 'createZone') {
                if (!zoneName) {
                    return App.render({
                        type   : 'error',
                        message: '"Name of zone" is required field'
                    });
                }

                data = {
                    name     : zoneName,
                    warehouse: this.id
                };

                modelName = 'zone';
            } else if (this.action === 'createLocation') {
                if (!groupingA) {
                    return App.render({
                        type   : 'error',
                        message: 'Here must be at least one location'
                    });
                }

                data = {
                    warehouse: this.id,
                    zone     : zone,
                    name     : nameLoc,
                    groupingA: groupingA,
                    groupingB: groupingB,
                    groupingC: groupingC,
                    groupingD: groupingD
                };

                modelName = 'location';

            } else {
                if (!name) {
                    return App.render({
                        type   : 'error',
                        message: '"Warehouse Name" is required field'
                    });
                }

                if (!account) {
                    return App.render({
                        type   : 'error',
                        message: 'Account is required field'
                    });
                }

                data.address = {
                    street : street,
                    city   : city,
                    state  : state,
                    zip    : zip,
                    country: country
                };

                data.name = name;
                data.isOwn = own;
                data.main = main;
                data.account = account;
            }

            model = new this.model();

            model.save(data, {
                patch  : true,
                wait   : true,
                success: function (model) {
                    var obj = {};
                    self.hideDialog();

                    if (self.event) {
                        obj[modelName] = model;

                        return self.eventChannel.trigger(self.event, obj);
                    }

                    if (model.get('main')) {
                        self.collection.each(function (model) {
                            if (model.get('main')) {
                                model.set('main', false);
                            }
                        });
                    }

                    self.collection.add(model);
                },

                error: function (model, xhr) {
                    self.errorNotification(xhr);
                }
            });
        },

        hideDialog: function () {
            if (this.action) {
                return $('.' + this.action).remove();
            }

            $('.create-dialog').remove();
        },

        render: function () {
            var template = _.template(this.template);
            var formString = template({title: this.title});
            var self = this;

            this.$el = $(formString).dialog({
                autoOpen   : true,
                dialogClass: this.action || 'create-dialog',
                title      : 'Create Warehouse',
                width      : this.dialogWidth,
                position   : {within: $('#wrapper')},
                buttons    : [{
                    id   : 'create-dialog',
                    class: 'btn blue',
                    text : 'Create',
                    click: function () {
                        self.saveItem();
                    }
                }, {
                    text : 'Cancel',
                    class: 'btn',
                    click: function () {
                        self.hideDialog();
                    }
                }]

            });

            this.input = this.$el.find('input');

            if (this.action === 'createLocation') {
                this.input.focusout(function (e) {
                    var $target = $(e.target);
                    var div = $target.closest('div');
                    var text = $target.val();

                    if (text) {
                        div.next().find('input').attr('disabled', false);
                    } else {
                        div.nextAll().find('input').val('');
                        div.nextAll().find('input').attr('disabled', true);
                    }

                });
            }

            dataService.getData(CONSTANTS.URLS.ZONES_FOR_DD, {warehouse: this.id}, function (resp) {
                self.responseObj['#zones'] = resp.data;
            });

            populate.get('#country', CONSTANTS.URLS.COUNTRIES, {}, 'name', this, true);
            populate.get('#account', '/chartOfAccount/getForDd', {category: 'ACCOUNTS_INVENTORY'}, 'name', this, true);

            this.delegateEvents(this.events);

            return this;
        }

    });

    return CreateView;
});
