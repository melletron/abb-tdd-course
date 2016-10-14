describe('casino.collections.black-jack', function () {
    "use strict";
    beforeEach(function () {

        angular.mock.module('casino.interfaces.local-storage', function ($provide) {
            $provide.factory('ls', function () {
                return {
                    linkCollectionToLocalStorage: () => '.'
                };
            });
        });

        angular.mock.module('casino.models.player', function ($provide) {
            $provide.factory('Player', () => {
                return function (obj) {
                    angular.extend(this, obj);
                };
            });
        });

        module('casino.collections.black-jack');
        inject((players) => {
            this.players = players;
        });
    });

    describe('players', function () {

        describe("getPlayer", function () {
            it("takes a name and tries to find that player in the collection", function () {
                let mockPlayer = {
                    name: 'Name'
                };
                this.players.collection.push(mockPlayer);
                expect(this.players.getPlayer('Name')).toEqual(mockPlayer);
            });

            it("if the player doesn't exist, create a new instance of that player and return that", function () {
                expect(this.players.getPlayer('Name').name).toEqual('Name');
            });
        });

        describe("removeByName", function () {

            it("removes the player from collection by name if it exists", function () {
                this.players.collection.push({name: 'Melle'});
                this.players.collection.push({name: 'Agnes'});
                this.players.collection.push({name: 'Max'});
                this.players.removeByName('None');
                expect(this.players.collection).toEqual([
                    {name: 'Melle'},
                    {name: 'Agnes'},
                    {name: 'Max'}
                ]);
                this.players.removeByName('Max');
                expect(this.players.collection).toEqual([
                    {name: 'Melle'},
                    {name: 'Agnes'}
                ]);
                this.players.removeByName('Melle');
                expect(this.players.collection).toEqual([
                    {name: 'Agnes'}
                ]);
            });

        });


        describe("getAllCards", function () {

            it("takes all cards from the players hands", function () {
                this.players.collection.push({name: 'Melle', cards: [1, 2, 3, 4, 5]});
                this.players.collection.push({name: 'Max', cards: [5, 6, 7, 8, 9]});
                expect(this.players.getAllCards()).toEqual([ 5, 4, 3, 2, 1, 9, 8, 7, 6, 5 ]);
                expect(this.players.collection).toEqual([
                    {name: 'Melle', cards: []},
                    {name: 'Max', cards: []}
                ]);
            });

        });

        it("has an empty collection of players", function () {
            expect(this.players.collection).toEqual([]);
        });
    });
});