define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/ExpensesPayments/TopBarTemplate.html',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.EXPENSESPAYMENTS,
        contentHeader: 'Expenses Payments',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
