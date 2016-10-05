(function () {
    "use strict";

    angular.module("casino.interfaces.local-storage", ['ngStorage'])
        .factory('ls', function ($localStorage) {
            return {
                getDeckOfCards: () => {
                    return "♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2".split(";");
                },
                linkCollectionToLocalStorage: function (collection, name, Object) {
                    if ($localStorage[name]) {
                        $localStorage[name].forEach(object => {
                            if (Object) {
                                collection.push(new Object(object));
                            } else {
                                collection.push(object);
                            }
                        });
                    }
                    $localStorage[name] = collection;
                }
            };
        });


}());