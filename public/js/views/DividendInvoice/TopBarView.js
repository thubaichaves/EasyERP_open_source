define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/DividendInvoice/TopBarTemplate.html',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.DIVIDENDINVOICE,
        contentHeader: 'Dividend Declarations',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
