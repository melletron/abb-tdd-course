describe('casino.functions.main', function () {
    "use strict";
    beforeEach(function () {
        module('casino.functions.main');
        inject((main) => {
            this.main = main;
        });
    });

    describe('calculateScore', function () {
        it("returns the correctly calculated Black Jack Score", function () {
            expect(this.main.getBlackJackScore(['♠A', '♠K'])).toBe('Black Jack');
            expect(this.main.getBlackJackScore(['♠A', '♠K', '♣A'])).toBe('12');
            expect(this.main.getBlackJackScore(['♠Q', '♠K'])).toBe('20');
            expect(this.main.getBlackJackScore(['♠3', '♠7'])).toBe('10');
            expect(this.main.getBlackJackScore(['♠3', '♠7'])).toBe('10');
            expect(this.main.getBlackJackScore(['♦A', '♦K', '♦Q', '♦J'])).toBe('Bust');
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