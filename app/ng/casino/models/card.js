(function () {
    "use strict";


    angular.module("casino.models.card", ['casino.functions.main', "casino.models.base"])
        .factory('Card', function (main, BaseModel) {

            var CardModel = function (obj) {
                BaseModel.call(this);
            };

            CardModel.prototype = angular.extend(Object.create(BaseModel.prototype), {

            });

            return CardModel;
        });

}());