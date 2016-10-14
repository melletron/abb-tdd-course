describe('casino.interfaces.local-storage', function () {
    "use strict";
    beforeEach(function () {
        module('casino.interfaces.local-storage');
        inject((ls) => {
            this.ls = ls;
        });
    });

    describe('linkCollectionToLocalStorage', function () {
        it(":)", function () {
            expect(true).toBe(true);
        });
    });
});