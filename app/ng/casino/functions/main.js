(function () {
    "use strict";

    angular.module("casino.functions.main", [])
        .factory('main', function (SCORES) {
            return {
                getDeckOfCards: () => {
                    return "♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2".split(";");
                },
                flatten: data => {
                    var returnData = [];
                    data.forEach(function (element) {
                        returnData.push(element.suit + '' + element.face);
                    });
                    return returnData;
                },
                //TODO: this would work nicely with a reduce function ..
                getBlackJackScore: cards => {
                    var score = 0;
                    var aces = 0;
                    cards.forEach(function (card) {
                        score += SCORES[card.substr(1)] || 0;
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
                },
                shuffle: input => {
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
                prettifyTime: seconds => {
                    var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
                        res = [];

                    if (seconds === 0) return 'now';

                    for (var key in time) {
                        if (seconds >= time[key]) {
                            var val = Math.floor(seconds / time[key]);
                            res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
                            seconds = seconds % time[key];
                        }
                    }

                    return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0]
                }
            };
        })
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
        });


}());