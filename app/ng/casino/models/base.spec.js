describe('casino.models.base', function () {
    "use strict";
    beforeEach(function () {
        module('casino.models.base');
        inject((BaseModel) => {
            this.BaseModel = BaseModel;
        });
    });

    describe('BaseModel', function () {
        it("is a blueprint of Base", function () {
            expect(this.BaseModel).toEqual(this.BaseModel);
        });
    });
});