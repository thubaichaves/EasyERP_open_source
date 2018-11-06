define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/integrationUnlinkedProducts/TopBarTemplate.html',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, CONSTANTS) {
    'use strict';

    var TopBarView = BaseView.extend({
        el           : '#unlinkedProductsTopBar',
        contentHeader: 'Resolver Conflitos2',
        contentType  : CONSTANTS.RESOLVECONFLICTS,
        template     : _.template(ContentTopBarTemplate)
    });

    return TopBarView;
});
