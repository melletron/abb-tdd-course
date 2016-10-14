(function () {
    "use strict";

    angular.module("casino.functions.main", [])
        .factory('main', function () {
            const SCORES = {
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
            };
            return {
                tableSort: cards => {
                    return {
                        first: {
                            a: [],
                            b: [],
                            c: []
                        },
                        second: {
                            a: [],
                            b: [],
                            c: []
                        },
                        third: {
                            a: [],
                            b: [],
                            c: []
                        }
                    }
                },
                testDiversity: (groupA, groupB) => {
                    let diversity = 0;
                    let av = (groupA.length + groupB.length) * 0.5;
                    groupA.forEach(element => {
                        for (let i = 0; i < groupB.length; i += 1) {
                            if (element === groupB[i]) {
                                diversity += 1;
                                break;
                            }
                        }
                    });
                    return 100 - (diversity / av) * 100;
                },
                isTableRound: cards => {
                    for (let i = 0; i < cards.length; i += 1) {
                        if (i === 0) {
                            let current = cards[i];
                            let prev = cards[cards.length - 1];
                            if ((current.substr(0, 1) === prev.substr(0, 1)) || (current.substr(1, 1) === prev.substr(1, 1))) {
                                return false;
                            }
                        } else {
                            let current = cards[i];
                            let prev = cards[i - 1];
                            if ((current.substr(0, 1) === prev.substr(0, 1)) || (current.substr(1, 1) === prev.substr(1, 1))) {
                                return false;
                            }
                        }
                    }
                    return true;
                },
                flatten: data => {
                    var returnData = [];
                    data.forEach(function (element) {
                        returnData.push(element.suit + '' + element.face);
                    });
                    return returnData;
                },
                getBlackJackScore: cards => {
                    let score = 0;
                    let aces = 0;
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
                shuffle: function (input) {
                    const inputCache = input.join(';');
                    for (let i = input.length - 1; i >= 0; i--) {
                        let randomIndex = Math.floor(Math.random() * (i + 1));
                        let itemAtIndex = input[randomIndex];
                        input[randomIndex] = input[i];
                        input[i] = itemAtIndex;
                    }
                    return (inputCache !== input.join(';')) ? input : this.shuffle(input);
                }
            };
        });


}());