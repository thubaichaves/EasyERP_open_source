define([
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/supplierPayments/TopBarTemplate.html',
    'views/topBarViewBase',
    'constants'
], function (_, ContentTopBarTemplate, BaseView, CONSTANTS) {
    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.SUPPLIERPAYMENTS,
        contentHeader: 'Payout',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
