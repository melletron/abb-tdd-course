(function () {
    "use strict";

    function blackJackCard() {

        return {
            restrict: 'AEC',
            templateUrl: "ng/casino/templates/black-jack-card.html",
            link: function (scope, element, attr) {
                scope.toggle = function () {
                    console.log('toggling');
                };
            }
        };
    }


    function blackJackTable() {

        return {
            restrict: 'E',
            controller: 'BlackJackTableController as table',
            templateUrl: "ng/casino/templates/black-jack-table.html"
        };
    }

    function blackJackPlayer() {

        return {
            restrict: 'E',
            scope: true,
            link: function (scope, element, attr) {
                scope.name = attr.name;
            },
            controller: 'BlackJackPlayerController as player',
            templateUrl: "ng/casino/templates/black-jack-player.html"
        };
    }

    angular.module('casino.black-jack.directives', ['casino.black-jack.controllers'])
        .directive('blackJackCard', blackJackCard)
        .directive('blackJackTable', blackJackTable)
        .directive('extendedDirective', function (blackJackTableDirective) {
            console.log(blackJackTableDirective);
            return blackJackTableDirective;
        })
        .directive('blackJackPlayer', blackJackPlayer);


}());
