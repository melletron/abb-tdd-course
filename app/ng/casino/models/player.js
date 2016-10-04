(function () {
    "use strict";


    angular.module("casino.models.player", ['casino.functions.main', "casino.models.base"])
        .factory('Player', function (main, BaseModel) {

            var PlayerModel = function (obj) {
                BaseModel.call(this);
                this.name = obj.name;
                this.cards = obj.cards || [];
            };

            PlayerModel.prototype = angular.extend(Object.create(BaseModel.prototype), {
                take: function (card) {
                    this.cards.push({
                        suit: card.substr(0, 1),
                        face: card.substr(1)
                    })
                },
                calculateScore: function () {
                    return main.getBlackJackScore(main.flatten(this.cards));
                }
            });

            return PlayerModel;
        });

}());