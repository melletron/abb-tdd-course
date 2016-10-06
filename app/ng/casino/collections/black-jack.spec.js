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
        module('casino.collections.black-jack');
        inject((players) => {
            this.players = players;
        });
    });

    describe('players', function () {
        it("has an empty collection of players", function () {
            expect(this.players.collection).toEqual([]);
        });
    });
});