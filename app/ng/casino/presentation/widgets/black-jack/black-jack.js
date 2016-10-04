(function () {
    "use strict";

    function blackJack() {

        return {
            restrict: 'E',
            templateUrl: "ng/casino/presentation/widgets/black-jack/black-jack.html"
        };
    }

    angular.module('casino.presentation.widgets.black-jack', ['casino.presentation.modules.black-jack-table'])
        .directive('blackJack', blackJack);
}());