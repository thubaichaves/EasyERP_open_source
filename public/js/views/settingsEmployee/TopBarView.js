define([
    'views/topBarViewBase',
    'Underscore',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/settingsEmployee/TopBarTemplate.html',
    'constants'
], function (BaseView, _, ContentTopBarTemplate, CONSTANTS) {
    var TopBarView = BaseView.extend({
        el           : '#top-bar',
        contentType  : CONSTANTS.SETTINGSEMPLOYEE,
        contentHeader: 'Employee',
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
