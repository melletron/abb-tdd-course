(function () {
    "use strict";

    function blackJackCard() {

        return {
            restrict: 'E',
            templateUrl: "ng/casino/presentation/ui/card/card.html"
        };
    }

    angular.module('casino.presentation.ui.card', [])
        .directive('card', blackJackCard);
}());