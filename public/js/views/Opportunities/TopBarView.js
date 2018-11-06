define([
    'jQuery',
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/Opportunities/TopBarTemplate.html',
    'constants'
], function ($, _, TopBarBase, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = TopBarBase.extend({
        el         : '#top-bar',
        contentType: CONSTANTS.OPPORTUNITIES,
        template   : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
