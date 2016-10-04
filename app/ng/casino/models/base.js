(function () {
    "use strict";

    var BaseModel = function () {
    };

    BaseModel.prototype = {
        base:function() {
        }
    };

    angular.module("casino.models.base", [])
        .factory('BaseModel', function () {
            return BaseModel;
        });

}());