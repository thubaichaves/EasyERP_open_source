define([
    'Underscore',
    'views/topBarViewBase',
    'text!'+ (function(){try{return App.currentUser.lang;}catch{};return '';})() +'templates/resolveConflicts/topBarTemplate.html',
    'constants'
], function (_, BaseView, ContentTopBarTemplate, CONSTANTS) {
    'use strict';

    var topBarView = BaseView.extend({
        el           : '#resolveConflictsTopBar',
        contentHeader: 'Resolver Conflitos',
        template     : _.template(ContentTopBarTemplate),
        contentType  : CONSTANTS.INTEGRATIONUNLINKEDPRODUCTS
    });

    return topBarView;
});
