(function () {
    "use strict";

    var ScoreController = function (players) {

        this.init = id => {
            let player = players.getPlayer(id);
            this.name = player.name;
            this.cards = player.cards
            this.score = 0;
            this.updateScore = () => {
                this.score = player.calculateScore();
            };
        }
    };


    function score() {
        return {
            restrict: 'E',
            scope: true,
            compile: function (/*element, attr, trans*/) {

                return function link(scope, el, attr) {
                    scope.player.init(attr.name);
                    scope.$watch('player.cards', scope.player.updateScore, scope.player.updateScore);
                }

            },
            controller: ScoreController,
            controllerAs: 'player',
            templateUrl: "ng/casino/presentation/modules/score/score.html"
        };
    }

    angular.module('casino.presentation.modules.score', [
        'casino.collections.black-jack'
    ])
        .directive('score', score);


}());