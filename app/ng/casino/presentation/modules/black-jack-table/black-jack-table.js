(function () {
    "use strict";

    var BlackJackTableController = function ($interval, main, players) {
        this.deck = main.getDeckOfCards();
        this.deck = main.shuffle(this.deck);
        this.players = players;
        this.timePlayed = 0;
        this.prettyTimePlayed = "0 seconds";

        $interval(() => {
            this.timePlayed++;
            this.prettyTimePlayed = main.prettifyTime(this.timePlayed);
        }, 1000);

        this.reshuffle = () => {
            this.players.collection.forEach(player => {
                let cardsAmount = player.cards.length;
                for (let i = 0; i < cardsAmount; i++) {
                    let card = player.cards.pop();
                    this.deck.push(card.suit + "" + card.face);
                }
            });
            this.deck = main.shuffle(this.deck);
        };

        this.call = () => {
            return this.deck.pop();
        };

        this.playerNameToAdd = '';

        this.addPlayer = () => {
            this.players.getPlayer(this.playerNameToAdd);
        };

    };


    function blackJackTable() {

        return {
            restrict: 'E',
            controller: BlackJackTableController,
            controllerAs: 'table',
            templateUrl: "ng/casino/presentation/modules/black-jack-table/black-jack-table.html"
        };
    }


    angular.module('casino.presentation.modules.black-jack-table', ['casino.presentation.modules.black-jack-player'])
        .directive('blackJackTable', blackJackTable)
}());