(function () {
    "use strict";

    /**
     * A controller object is a standard JavaScript object that gets instantiated by Angular
     * if it is linked to a directive. And depending on the setting, each directive has its own
     * instance.
     *
     * The controller has not a lot of logic, and is not used in a classical way. Therefore, it contains
     * only privileged public methods and view-state variables.
     *
     * All important data is store in the collection (players)
     *
     * The methods on a controller are very simple, they only route view events and view state data to the
     * collection and vice versa.
     *
     * @param $interval
     * @param players
     * @param cards
     * @constructor
     */
    var BlackJackTableController = function ($interval, players, cards) {
        this.timePlayed = 0;
        this.players = players.getAllPlayers();
        this.shuffleDeck = () => cards.shuffle();
        this.reshuffle = () => this.shuffleDeck(players.getAllCards());
        this.call = () => cards.pop();
        this.addPlayer = () => players.getPlayer(this.playerNameToAdd);
        $interval(() => this.timePlayed++, 1000);
    };

    function blackJackTable() {

        return {
            restrict: 'E',
            controller: BlackJackTableController,
            controllerAs: 'table',
            templateUrl: "ng/casino/presentation/modules/black-jack-table/black-jack-table.html"
        };
    }

    /**
     * Because the controller has so few responsibilities we can directly link them to the directive.
     * Any unit test you may want to write can be done by injecting the directive and accessing its
     * instantiated variable.
     */
    angular.module("casino.presentation.modules.black-jack-table", [
        "casino.presentation.filters.time",
        "casino.interfaces.local-storage",
        "casino.presentation.modules.black-jack-player",
        "casino.collections.black-jack"
    ])
        .directive('blackJackTable', blackJackTable);
}());