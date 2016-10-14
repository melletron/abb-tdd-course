describe('casino.presentation.filters.time', function () {
    "use strict";
    beforeEach(function () {
        module('casino.presentation.filters.time');
        inject(($filter) => {
            this.prettify = $filter('prettify');
        });
    });

    describe('prettify', function () {
        it("turns seconds into a pretty human readable format", function () {
            expect(this.prettify(0)).toEqual('none');
            expect(this.prettify(1)).toEqual('1 second');
            expect(this.prettify(2)).toEqual('2 seconds');
            expect(this.prettify(61)).toEqual('1 minute and 1 second');
            expect(this.prettify(121)).toEqual('2 minutes and 1 second');
            expect(this.prettify(3600)).toEqual('1 hour');
            expect(this.prettify(3601)).toEqual('1 hour and 1 second');
            expect(this.prettify(7202)).toEqual('2 hours and 2 seconds');
            expect(this.prettify(86400)).toEqual('1 day');
            expect(this.prettify(86424)).toEqual('1 day and 24 seconds');
            expect(this.prettify(86484)).toEqual('1 day, 1 minute and 24 seconds');
            expect(this.prettify(86544)).toEqual('1 day, 2 minutes and 24 seconds');
            expect(this.prettify(173088)).toEqual('2 days, 4 minutes and 48 seconds');
            expect(this.prettify(173088)).toEqual('2 days, 4 minutes and 48 seconds');
            expect(this.prettify(31536000)).toEqual('1 year');
        });
    });
});