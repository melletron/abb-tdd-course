(function () {
    "use strict";

    var BlackJackPlayerController = function (players) {

        this.init = id => {
            let player = players.getPlayer(id);
            this.name = player.name;
            this.cards = player.cards;
            this.score = 0;
            this.take = card => {
                player.take(card);
            };
            this.updateScore = () => {
                this.score = player.calculateScore();
            };
        }
    };


    function blackJackPlayer() {
        return {
            restrict: 'E',
            scope: true,
            compile: function (/*element, attr, trans*/) {

                return function link(scope, el, attr) {
                    scope.player.init(attr.name);
                    scope.$watch('player.cards', scope.player.updateScore, scope.player.updateScore);
                }

            },
            controller: BlackJackPlayerController,
            controllerAs: 'player',
            templateUrl: "ng/casino/presentation/modules/black-jack-player/black-jack-player.html"
        };
    }

    angular.module('casino.presentation.modules.black-jack-player', [
        'casino.collections.black-jack',
        'casino.presentation.ui.card'
    ])
        .directive('blackJackPlayer', blackJackPlayer);


}());