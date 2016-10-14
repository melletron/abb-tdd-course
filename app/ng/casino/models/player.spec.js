describe('casino.models.player', function () {
    "use strict";
    beforeEach(function () {
        module('casino.models.player');
        inject((Player) => {
            this.Player = Player;
        });
    });

    describe('Player', function () {
        it("is a blueprint of Player", function () {
            expect(this.Player).toEqual(this.Player);
        });
    });
});