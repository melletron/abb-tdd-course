(function () {
    "use strict";

    var BlackJackPlayerController = function (players) {
        var player;
        this.score = 0;

        this.updateScore = () => this.score = player.calculateScore();

        this.init = id => {
            player = players.getPlayer(id);
            this.take = player.take;
            this.name = player.name;
            this.cards = player.cards;
        };

        this.leave = () => {
            if (this.cards.length > 0) {
                console.log(`${this.name} cannot leave until the game is over...\r\nPlease hit the reshuffle button`);
            } else {
                players.removeByName(this.name);
            }
        }

    };


    function blackJackPlayer() {
        return {
            restrict: 'E',
            scope: true,
            link: function (scope, el, attr) {
                scope.player.init(attr.name);
                scope.$watch('player.cards', scope.player.updateScore, scope.player.updateScore);
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