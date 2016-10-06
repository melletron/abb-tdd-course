describe('casino.functions.main', function () {
    "use strict";
    beforeEach(function () {
        module('casino.functions.main');
        inject((main) => {
            this.main = main;
        });
    });

    describe('calculateScore', function () {
        it("returns Black Jack on ♠A ♠K", function () {
            expect(this.main.getBlackJackScore(['♠A', '♠K'])).toBe('Black Jack');
        });
    });

    describe('shuffle', function () {
        it("randomly distributes elements in an array", function () {
            expect(this.main.shuffle(['♠A', '♠K'])).toEqual(['♠K', '♠A']);
            expect(this.main.shuffle(['♠A', '♠K'])).toEqual(['♠K', '♠A']);
            expect(this.main.shuffle(['♠A', '♠K'])).toEqual(['♠K', '♠A']);
            expect(this.main.shuffle(['♠A', '♠K'])).toEqual(['♠K', '♠A']);
            expect(this.main.shuffle(['♠A', '♠K'])).toEqual(['♠K', '♠A']);
            expect(this.main.shuffle(['♠A', '♠K'])).toEqual(['♠K', '♠A']);
            expect(this.main.shuffle(['♠A', '♠K'])).toEqual(['♠K', '♠A']);
        });
    });
});