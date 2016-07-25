(function () {
    "use strict";

    var flatten = function () {
        return function flatten(data) {
            var returnData = [];
            data.forEach(function (element) {
                returnData.push(element.suit + '' + element.face);
            });
            return returnData;
        };
    };

    angular.module("casino.data-access.resource", [])
        .filter('flatten', flatten);

}());