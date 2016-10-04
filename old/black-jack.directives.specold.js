describe("casino.black-jack.directives", function () {
    "use strict";
    var blackJackCard;
    beforeEach(module('casino.black-jack.directives'));
    describe('blackJackCard', function () {
        beforeEach(function () {
            var that = this;
            inject(function ($compile, $rootScope, $templateCache, blackJackCardDirective) {
                that.blackJackCard = blackJackCardDirective[0];
                that.$compile = $compile;
                that.$scope = $rootScope.$new();
                $templateCache.put('ng/casino/templates/card.html', '<h1 class="{{(card.suit === \'♥\' || card.suit === \'♦\') && \'text-danger\' || \'\' }}" data-ng-click="toggle()">{{card.suit}}{{card.face}}</h1>');
            });
        });

        it('is restricted to AEC', function () {
                expect(this.blackJackCard.restrict).toEqual('AEC');
        });

        it('loads teh card.html template', function () {

            this.blackJackCardElement = angular.element('<black-jack-card data-card="{{card}}"/>');
            this.$scope.card = {
                suit: '♣',
                face: '5'
            };
            this.$compile(this.blackJackCardElement)(this.$scope);
            this.$scope.$digest();

            expect(this.blackJackCardElement.html()).toEqual('<h1 class="" data-ng-click="toggle()">♣5</h1>');


        });

        it('renders the template with the right data', function () {

            this.blackJackCardElement = angular.element('<black-jack-card />');
            this.$compile(this.blackJackCardElement)(this.$scope);
            this.$scope.$digest();

            console.log(this.blackJackCardElement.html());

            expect(true).toBe(true);
        });

        //we could either have the compile or the link function
        describe('link', function () {

            beforeEach(function () {
                spyOn(console, 'log').and.returnValue('');
                this.scope = {};
                this.blackJackCard.link(this.scope, this.blackJackCardElement, {
                    card: {
                        suit: 'A',
                        face: 'B'
                    }
                });
                this.toggle = this.scope.toggle;
            });

            describe('toggle', function () {

                it('does something', function () {
                    this.scope.toggle();
                    expect(console.log).toHaveBeenCalledWith('toggling');
                })

            });

        });

    });

    describe('blackJackPlayer', function () {

        beforeEach(function () {
            var that = this;
            inject(function ($compile, $rootScope, $templateCache, blackJackPlayerDirective) {
                that.blackJackPlayer = blackJackPlayerDirective[0];
                that.$compile = $compile;
                that.$scope = $rootScope.$new();
                $templateCache.put('ng/casino/templates/card.html', '');
            });
        });

    });

});