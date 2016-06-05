describe("casino.data-access.resource", function () {
    "use strict";
    beforeEach(function () {
        module('casino.data-access.resource');
    });

    describe('flatten', function () {

        beforeEach(function () {
            var that = this;
            inject(function ($filter) {
                that.flatten = $filter('flatten');
            });

        });

        it("takes a collection of card objects and returns them as flat strings", function () {
            expect(this.flatten([
                {
                    suit: 'a',
                    face: 'a'
                }
            ])).toEqual(['aa']);
        });

    });


});