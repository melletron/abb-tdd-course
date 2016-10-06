describe('casino.presentation.modules.black-jack-player', function () {
    "use strict";
    beforeEach(function () {
        module('casino.presentation.modules.black-jack-player');
        inject((blackJackPlayerDirective) => {
            this.blackJackPlayerDirective = blackJackPlayerDirective[0]
        });


        this.playerMock = {
            name: 'Name',
            cards: 'Cards',
            take: 'Take',
            calculateScore: jasmine.createSpy('player.calculateScore').and.returnValue('score')
        };

        this.playersMock = {
            getPlayer: name => {
                this.name = name;
                return this.playerMock;
            },
            removeByName: jasmine.createSpy('players.removeByName')
        };
        this.blackJackPlayerDirectiveController = new this.blackJackPlayerDirective.controller(this.playersMock);
    });

    describe('blackJackPlayerDirective', function () {
        describe('link', function () {
            it("takes the player name from the attributes and calls the init function of the controller", function () {
                let scope = {
                    player: {
                        init: jasmine.createSpy('scope.player.init'),
                        updateScore: 'method'
                    },
                    $watch: jasmine.createSpy('scope.$watch')
                };
                this.blackJackPlayerDirective.link(scope, undefined, {
                    name: 'Name'
                });
                expect(scope.player.init).toHaveBeenCalledWith('Name');
                expect(scope.$watch).toHaveBeenCalledWith('player.cards', scope.player.updateScore, scope.player.updateScore);
            });
        });
    });

    describe('blackJackPlayerController', function () {

        describe('init', function () {
            it("retrieves the player from the players service and links the card deck and name to the view state", function () {
                this.blackJackPlayerDirectiveController.init('Name');
                expect(this.name).toBe('Name');
                expect(this.blackJackPlayerDirectiveController.name).toBe('Name');
                expect(this.blackJackPlayerDirectiveController.cards).toBe('Cards');
                expect(this.blackJackPlayerDirectiveController.take).toEqual(this.playerMock.take);
            });
        });

        describe('updateScore', function () {
            it("takes the score from the player model and passes it onto the view state", function () {
                this.blackJackPlayerDirectiveController.init('Name');
                this.blackJackPlayerDirectiveController.updateScore();
                expect(this.playerMock.calculateScore).toHaveBeenCalled();
                expect(this.blackJackPlayerDirectiveController.score).toBe('score');
            });
        });

        describe('leave', function () {
            it("calls the removeByName method from the players service if cards is empty", function () {
                this.blackJackPlayerDirectiveController.cards = [];
                this.blackJackPlayerDirectiveController.leave();
                expect(this.playersMock.removeByName).toHaveBeenCalledWith(this.blackJackPlayerDirectiveController.name);
            });

            it("doesn't calls the removeByName method from the players service if cards is empty", function () {
                spyOn(console, 'log');
                this.blackJackPlayerDirectiveController.cards = [0];
                this.blackJackPlayerDirectiveController.leave();
                expect(this.playersMock.removeByName).not.toHaveBeenCalled();
            });
        });

    });
})
;