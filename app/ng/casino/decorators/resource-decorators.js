(function () {
    "use strict";
    angular.module('casino.decorators.resource-decorators', [
        "casino.interfaces.local-storage"
    ])
        .constant('shareDecorator', function shareDecorator(serviceName) {
            return function ($delegate, $interval, $window) {
                $window.AAB_RESOURCES = $window.AAB_RESOURCES || {};
                $window.AAB_RESOURCES[serviceName] = $window.AAB_RESOURCES[serviceName] || [];
                $delegate.collection = $window.AAB_RESOURCES[serviceName];
                $delegate.cache = JSON.stringify($delegate.collection);
                $delegate.collection.bust = 1;
                var cacheBuster = () => {
                    let checker = (JSON.stringify($delegate.collection) !== $delegate.cache);
                    if (checker) {
                        $delegate.cache = JSON.stringify($delegate.collection);
                        $delegate.collection.bust++;
                        if ($delegate.collection.bust === 99) {
                            $delegate.collection.bust = 0;
                        }
                    }
                };
                $interval(cacheBuster, 16);
                return $delegate;
            };
        })
        .constant('localStorageDecorator', function localStorageDecorator(serviceName, objectName) {
            return function ($delegate, $injector, ls) {
                if ($delegate.collection.linked !== true) {
                    let object = undefined;
                    $delegate.collection.linked = true;
                    if (objectName) {
                        object = $injector.get(objectName);
                    }
                    /**
                     * We link the service collection to the local storage.
                     * So each time a player is added, it synchronises with an external
                     * data store
                     */
                    ls.linkCollectionToLocalStorage($delegate.collection, serviceName, object);
                }
                return $delegate;
            }
        });
}());