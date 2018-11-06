define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/DividendPayments/TopBarTemplate.html',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.DIVIDENDPAYMENTS,
        contentHeader: 'Dividend Payments',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
