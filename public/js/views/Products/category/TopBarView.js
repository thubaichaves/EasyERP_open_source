define([
    'Underscore',
    'views/topBarViewBase',
    'jQuery',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/ProductCategory/TopBarTemplate.html'
], function (_, BaseView, $, TopBarTemplate) {
    var TopBarView = BaseView.extend({
        el         : '#top-bar',
        contentType: 'Products',
        actionType : null, // Content, Edit, Create
        template   : _.template(TopBarTemplate)
    });

    return TopBarView;
});
