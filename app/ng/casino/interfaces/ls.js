(function () {
    "use strict";

    angular.module("casino.interfaces.local-storage", ['ngStorage'])
        .factory('ls', function ($localStorage) {
            return {
                linkCollectionToLocalStorage: function (collection, name, Object) {
                    if ($localStorage[name]) {
                        $localStorage[name].forEach(object => {
                            if (Object) {
                                collection.push(new Object(object));
                            } else {
                                collection.push(object);
                            }
                        });
                    }
                    $localStorage[name] = collection;
                }
            };
        });


}());