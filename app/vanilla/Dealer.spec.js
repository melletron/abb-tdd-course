xdescribe('Dealer', function () {

    beforeEach(function () {
        this.dealer = new Dealer();
    });

    describe("introduce", function () {

        it("welcomes the player", function () {
            expect(this.dealer.introduce('Melle')).toEqual('Welcome, Melle');
        });

    });


});