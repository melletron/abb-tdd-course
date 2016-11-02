(function () {
    "use strict";

    angular.module("casino.interfaces.client-server", [])
        .factory('rest', function ($http) {
            return {
                getCollectionFromServer: function (location) {
                    return $http({
                        url: location
                    });
                },
                getModelFromServer: function (location) {
                    return $http({
                        url: location
                    });
                }
            };
        });


}());