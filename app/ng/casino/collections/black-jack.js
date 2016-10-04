(function () {
    "use strict";

    function Players(Player, $localStorage) {

        this.collection = [];

        if ($localStorage.players) {
            $localStorage.players.forEach(player => {
                this.collection.push(new Player(player));
            });
        }

        $localStorage.players = this.collection;

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

    Players.prototype = {

    };

    angular.module('casino.collections.black-jack', ['ngStorage', 'casino.models.player'])
        .service('players', Players);

}());