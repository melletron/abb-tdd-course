(function () {
    "use strict";

    var BlackJackTableController = function () {
        this.deck = "♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2".split(";");
        this.deck = this.shuffle(this.deck);
    };

    BlackJackTableController.prototype = {
        shuffle: function shuffle(input) {
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
        },
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