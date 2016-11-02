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

//    xdescribe('tableSort', function () {
//        beforeEach(function () {
//            this.casino.cards = "♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;".split(';');
//        });
//        it("takes a collection of casino.cards, and groups them over 3 x 3 collections such that no suits are seated next to each other, and combination of casino.cards is repeated, and no two face values are allowed to sit next to each other", function () {
//
//            let result = this.main.tableSort(this.casino.cards);
//            let firstTables = result.first;
//            let secondTables = result.second;
//            let thirdTables = result.third;
//
//            expect(this.main.isTableRound(result.first.a)).toBe(true);
//            expect(this.main.isTableRound(result.first.b)).toBe(true);
//            expect(this.main.isTableRound(result.first.c)).toBe(true);
//            expect(this.main.isTableRound(result.second.a)).toBe(true);
//            expect(this.main.isTableRound(result.second.b)).toBe(true);
//            expect(this.main.isTableRound(result.second.c)).toBe(true);
//            expect(this.main.isTableRound(result.third.a)).toBe(true);
//            expect(this.main.isTableRound(result.third.b)).toBe(true);
//            expect(this.main.isTableRound(result.third.c)).toBe(true);
//
//            //Test if casino.cards are not assigned twice
//            Object.keys(result).forEach(key => {
//                let roundTable = result[key];
//                expect(this.main.testDiversity(roundTable.a, roundTable.b)).toBe(100);
//                expect(this.main.testDiversity(roundTable.b, roundTable.c)).toBe(100);
//                expect(this.main.testDiversity(roundTable.c, roundTable.a)).toBe(100);
//            });
//
//            //Test if no one is repeating tables.
//            ['a', 'b', 'c'].forEach(letter => {
//
//                expect(this.main.testDiversity(firstTables[letter], secondTables[letter])).toBe(100);
//                expect(this.main.testDiversity(secondTables[letter], thirdTables[letter])).toBe(100);
//                expect(this.main.testDiversity(thirdTables[letter], firstTables[letter])).toBe(100);
//
//
//            });
//
//            expect(this.main.testDiversity(secondTables.a, firstTables.c)).toBeGreaterThan(33);
//            expect(this.main.testDiversity(secondTables.a, firstTables.b)).toBeGreaterThan(33);
//
//            expect(this.main.testDiversity(secondTables.b, firstTables.a)).toBeGreaterThan(33);
//            expect(this.main.testDiversity(secondTables.b, firstTables.c)).toBeGreaterThan(33);
//
//            expect(this.main.testDiversity(secondTables.c, firstTables.a)).toBeGreaterThan(33);
//            expect(this.main.testDiversity(secondTables.c, firstTables.b)).toBeGreaterThan(33);
//
//            expect(this.main.testDiversity(secondTables.a, thirdTables.c)).toBeGreaterThan(33);
//            expect(this.main.testDiversity(secondTables.a, thirdTables.b)).toBeGreaterThan(33);
//
//            expect(this.main.testDiversity(secondTables.b, thirdTables.a)).toBeGreaterThan(33);
//            expect(this.main.testDiversity(secondTables.b, thirdTables.c)).toBeGreaterThan(33);
//
//            expect(this.main.testDiversity(secondTables.c, thirdTables.a)).toBeGreaterThan(33);
//            expect(this.main.testDiversity(secondTables.c, thirdTables.b)).toBeGreaterThan(33);
//
//        });
//    });

    describe('isTableRound', function () {

        it("takes a collection of casino.cards and makes sure no suits match or face values match", function () {
            expect(this.main.isTableRound(['♠A', '♠K', '♠Q', '♠J'])).toBe(false);
            expect(this.main.isTableRound(['♠A', '♠K', '♦Q', '♠J'])).toBe(false);
            expect(this.main.isTableRound(['♠A', '♦K', '♠Q', '♦J'])).toBe(true);
            expect(this.main.isTableRound(['♠A', '♦A', '♠Q', '♦J'])).toBe(false);
            expect(this.main.isTableRound(['♠A', '♠Q', '♦J', '♦A'])).toBe(false);
        });
    });

    describe('testDiversity', function () {

        it("takes two collections and tests its diversity, returning an integer representing a % value", function () {
            expect(this.main.testDiversity([1, 2, 3, 4], [1, 2, 3, 4])).toBe(0);
            expect(this.main.testDiversity([1, 2, 3, 4], [3, 4, 5, 6])).toBe(50);
            expect(this.main.testDiversity([1, 2, 3, 4], [5, 6, 7, 8])).toBe(100);
        });
    });

});