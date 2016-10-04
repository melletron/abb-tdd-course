xdescribe("sort", function () {

    beforeEach(function () {
        this.shuffledDeck = ["♥4", "♠A", "♣6", "♥J", "♦6", "♦4", "♠K", "♣J", "♣2", "♣4", "♦3", "♥6", "♣9", "♦9", "♠8", "♥K", "♦8", "♦K", "♥5", "♠10", "♥7", "♠3", "♠2", "♣A", "♥3", "♥A", "♣8", "♦10", "♠7", "♦J", "♠9", "♣5", "♥8", "♣K", "♣Q", "♦5", "♥2", "♠6", "♦2", "♥10", "♣3", "♠5", "♥9", "♥Q", "♠Q", "♠J", "♦Q", "♦A", "♣7", "♦7", "♣10", "♠4"];
        this.sortedDeck = "♠A;♠K;♠Q;♠J;♠10;♠9;♠8;♠7;♠6;♠5;♠4;♠3;♠2;♥A;♥K;♥Q;♥J;♥10;♥9;♥8;♥7;♥6;♥5;♥4;♥3;♥2;♦A;♦K;♦Q;♦J;♦10;♦9;♦8;♦7;♦6;♦5;♦4;♦3;♦2;♣A;♣K;♣Q;♣J;♣10;♣9;♣8;♣7;♣6;♣5;♣4;♣3;♣2".split(";");
    });

    it("takes a random deck of cards and orders it from A to 2 and ♠ ♥ ♦ ♣", function () {
        expect(sort(this.shuffledDeck)).toEqual(this.sortedDeck);
    });

});