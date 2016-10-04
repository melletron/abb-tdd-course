describe('casino.collections.black-jack', function () {
    "use strict";
    beforeEach(function () {
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