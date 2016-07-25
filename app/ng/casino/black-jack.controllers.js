(function () {
    "use strict";

    var BlackJackTableController = function ($interval) {
        this.deck = "♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2".split(";");
        this.deck = BlackJackTableController.shuffle(this.deck);
        this.timePlayed = 0;
        this.players = [];
        this.prettyTimePlayed = "00:00:00";
        $interval(() => this.addTime(), 1000);
    };

    //Statics
    BlackJackTableController.shuffle = function shuffle(input) {
        var inputCache = input.join(';');
        for (var i = input.length - 1; i >= 0; i--) {

            var randomIndex = Math.floor(Math.random() * (i + 1));
            var itemAtIndex = input[randomIndex];

            input[randomIndex] = input[i];
            input[i] = itemAtIndex;
        }
        if (inputCache === input.join(';')) {
            return this.shuffle(input);
        }
        return input;
    };

    //Methods
    BlackJackTableController.prototype = {
        reshuffle: function () {
            var that = this;
            angular.forEach(this.players, function (player) {
                var cards = player.cards.length;
                var i = 0;
                for (; i < cards; i++) {
                    let card = player.cards.pop();
                    that.deck.push(card.suit + "" + card.face);
                }
            });
            this.deck = BlackJackTableController.shuffle(this.deck);
        },
        present: function (player) {
            this.players.push(player);
        },
        addTime: function () {
            this.timePlayed++;
            this.prettyTimePlayed = this.prettifyTime(this.timePlayed);
        },
        prettifyTime: function (time) {
            var s = time % 60;
            var m = Math.floor(time / 60);
            var h = Math.floor(m / 60);
            m -= (h * 60);
            return (h < 10 && "0" || "") + h + ":" + (m < 10 && "0" || "") + m + ":" + (s < 10 && "0" || "") + s;
        },
        shuffle: BlackJackTableController.shuffle,
        hitMe: function () {
            return this.deck.pop();
        },
        call: function () {
            return this.hitMe();
        }
    };

    var BlackJackPlayerController = function ($filter, SCORES) {
        this.flatten = $filter('flatten');
        this.scores = SCORES;
        this.cards = [];
    };

    BlackJackPlayerController.prototype = {
        take: function (card) {
            this.cards.push({
                suit: card.substr(0, 1),
                face: card.substr(1)
            })
        },
        calculateScore: function () {
            var cards = this.flatten(this.cards);
            var that = this;
            var score = 0;
            var aces = 0;
            cards.forEach(function (card) {
                score += that.scores[card.substr(1)] || 0;
                if (card.substr(1) === 'A') {
                    aces++;
                }
            });

            while (score + 10 <= 21 && aces > 0) {
                score += 10;
                aces -= 1;
            }

            if (score > 21) {
                return 'Bust';
            }
            if (score === 21 && cards.length === 2) {
                return 'Black Jack';
            }
            return score + '';
        }
    };


    angular.module("casino.black-jack.controllers", ['casino.data-access.resource'])
        .constant('SCORES', {
            A: 1,
            K: 10,
            Q: 10,
            J: 10,
            10: 10,
            9: 9,
            8: 8,
            7: 7,
            6: 6,
            5: 5,
            4: 4,
            3: 3,
            2: 2
        })
        .controller('BlackJackTableController', BlackJackTableController)
        .controller('BlackJackPlayerController', BlackJackPlayerController);

}());