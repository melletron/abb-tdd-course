(function () {
    "use strict";

    function Cards(main, $timeout) {
        this.collection = [];

        $timeout(() => {
            if (this.collection.length === 0) {
                let cards = main.shuffle("♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2".split(";"));
                cards.forEach(card => {
                    this.collection.push(card);
                });
            }
        }, 0);

        this.shuffle = deck => {
            if (deck) {
                deck.forEach(card => {
                    this.pushPlayerCard(card);
                });
            }
            this.collection = main.shuffle(this.collection);
        }
    }

    Cards.prototype = {
        pop: function () {
            return this.collection.pop();
        },
        pushPlayerCard: function (card) {
            this.collection.push(card.suit + "" + card.face);
        }
    };

    /**
     *
     * The Players object gets the Player object injected
     * and from the interface layer the local storage utilities.
     *
     * @param Player
     * @param ls
     * @constructor
     */
    function Players(Player, rest) {

        /**
         * The collection is an Array containing
         *  all instances of players.
         */
        this.collection = [];

        /**
         * Since Angular services are only instantiated if they're injected we can
         *  do the initial service GET from the constructor function (this function)
         */

        // rest.getCollectionFromServer('/abb-tdd-course/server/casino.players.json').then(response => {
        //     response.data.forEach(player => {
        //         this.collection.push(new Player(player))
        //     });
        // });


        /**
         * We need privileged methods that can access the dependencies
         * injected into the controller
         *
         * This function checks if a player exists by name
         * and if it doesn't it adds it to the collection.
         *
         * @param name
         * @returns {*}
         */
        this.getPlayer = name => {
            let players = this.collection.filter(player => player.name === name);
            if (players.length > 0) {
                return players[0];
            }
            let player = new Player({name: name});
            this.collection.push(player);
            return player;
        };

    }

    /**
     * We can use the standard JavaScript notation for adding more
     * methods to the service.
     * @type {{removeByName: removeByName}}
     */
    Players.prototype = {
        removeByName: function (name) {
            let index = -1;
            this.collection.forEach((element, i) => {
                if (element.name === name) {
                    index = i;
                }
            });
            if (index >= 0) {
                this.collection.splice(index, 1);
            }
        },
        getAllCards: function () {
            var cards = [];
            this.collection.forEach(player => {
                let cardsAmount = player.cards.length;
                for (let i = 0; i < cardsAmount; i += 1) {
                    let card = player.cards.pop();
                    cards.push(card);
                }
            });
            return cards;
        },
        getAllPlayers: function () {
            return this.collection;
        }
    };

    angular.module("casino.collections.black-jack", [
        "casino.decorators.resource-decorators",
        "casino.interfaces.client-server",
        "casino.models.player"
    ])
    /**
     * Because a service is a singleton
     * and gets initialised by Angular on bootstrap
     * we write the Object with Pascal case but register it using camel case.
     */
        .service("players", Players)
        .service("cards", Cards)
        .config(function ($provide, shareDecorator, localStorageDecorator) {
            $provide.decorator("players", shareDecorator("players"));
            $provide.decorator("players", localStorageDecorator("players", "Player"));
            // $provide.decorator("cards", shareDecorator("cards"));
        });

}());