describe("casino.black-jack.controllers", function () {
    "use strict";
    beforeEach(function () {
        module('casino.black-jack.controllers');
    });

    describe('BlackJackTableController', function () {

        beforeEach(function () {
            var that = this;

            inject(function ($controller) {
                that.blackJackTableController = $controller('BlackJackTableController');
            });

        });

        describe('shuffle', function () {
            it("takes an array and returns it in a random order", function () {
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c'])).not.toEqual(['a', 'b', 'c']);
                expect(this.blackJackTableController.shuffle(['a', 'b', 'c']).sort()).toEqual(['a', 'b', 'c']);
            });
        });

        describe('call', function () {
            it("gives the top card of the deck", function () {

                expect(this.blackJackTableController.call('0')).toMatch(/^[♠♥♦♣]([AKQJ2-9]|10)$/);
                var topOfDeck = this.blackJackTableController.deck[this.blackJackTableController.deck.length - 1];
                expect(this.blackJackTableController.call('0')).toEqual(topOfDeck);
                expect(this.blackJackTableController.deck.length).toEqual(50);

            });
        });

        describe('hitMe', function () {

            xit("gives the return value of call if the player has a valid score", function () {
                expect(this.blackJackTableController.hitMe).toEqual('fake return value');
                expect(this.blackJackTableController.call).toHaveBeenCalled();
            });


            xit("asks the player\'s score when it doesn\'t provide it", function () {

                expect(this.blackJackTableController.hitMe()).toEqual('Please share your current score with me');

            });

            xit("refuses to give a card to a player that has the highest score already", function () {

                expect(this.blackJackTableController.hitMe('21')).toEqual('You already have the highest score');
                expect(this.blackJackTableController.hitMe('Black Jack')).toEqual('You already have the highest score');


            });

            xit("tells player it is bust when it is", function () {

                expect(this.blackJackTableController.hitMe('Bust')).toEqual('You\'re bust, I can\'t give you another card');

            });
        });

    });

    describe('BlackJackPlayerController', function () {

        beforeEach(function () {
            var that = this;

            inject(function ($controller) {
                that.blackJackPlayerController = $controller('BlackJackPlayerController');
            });

        });

        describe('take', function () {
            it("takes a card, expands it and stores it in the cards array", function () {
                this.blackJackPlayerController.take('');
                expect(true).toBe(true);
            });
        });



    });


});