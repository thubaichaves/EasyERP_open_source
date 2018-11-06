define([
    'jQuery',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Proforma/TopBarTemplate.html',
    'views/topBarViewBase',
    'custom',
    'common',
    'constants',
    'dataService'
], function ($, _, ContentTopBarTemplate, BaseView, Custom, Common, CONSTANTS, dataService) {
    var TopBarView = BaseView.extend({
        el         : '#top-bar',
        contentType: CONSTANTS.SALESPROFORMA,
        template   : _.template(ContentTopBarTemplate),

        initialize: function (options) {
            if (options.collection) {
                this.collection = options.collection;
            }
            this.render();

            this.hideSaveCancelBtns();
        },

        hideSaveCancelBtns: function () {
            var createBtnEl = $('#top-bar-createBtn');
            var saveBtnEl = $('#top-bar-saveBtn');
            var cancelBtnEl = $('#top-bar-deleteBtn');

            createBtnEl.remove();
            saveBtnEl.hide();
            cancelBtnEl.hide();

            return false;
        }
    });

    return TopBarView;
});
