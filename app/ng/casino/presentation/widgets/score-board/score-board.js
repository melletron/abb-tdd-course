(function () {
    "use strict";

    function blackJack(players) {

        return {
            link: (scope, el, attr) => {
                scope.players = players.collection;
            },
            restrict: 'E',
            templateUrl: "ng/casino/presentation/widgets/score-board/score-board.html"
        };
    }

    angular.module('casino.presentation.widgets.score-board', ['casino.presentation.modules.score', 'casino.collections.black-jack'])
        .directive('scoreBoard', blackJack);
}());