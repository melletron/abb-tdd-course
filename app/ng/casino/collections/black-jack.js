(function () {
    "use strict";

    function Cards(ls, main) {
        this.collection = [];
        ls.linkCollectionToLocalStorage(this.collection, "cards");
        if (this.collection.length === 0) {
            let cards = main.shuffle("♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2".split(";"));
            cards.forEach(card => {
                this.collection.push(card);
            });
        }
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
    function Players(Player, ls) {

        /**
         * The collection is an Array containing
         *  all instances of players.
         */
        this.collection = [];

        /**
         * We link the players collection to the local storage.
         * So each time a player is added, it synchronises with an external
         * data store
         */

        ls.linkCollectionToLocalStorage(this.collection, "players", Player);

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

            var players = this.collection.filter(function (player) {
                return player.name === name;
            });
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

    angular.module("casino.collections.black-jack", ["casino.interfaces.local-storage", "casino.models.player"])
    /**
     * Because a service is a singleton
     * and gets initialised by Angular on bootstrap
     * we write the Object with Pascal case but register it using camel case.
     */
        .service("players", Players)
        .service("cards", Cards);

}());