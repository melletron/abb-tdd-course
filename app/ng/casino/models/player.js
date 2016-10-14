(function () {
    "use strict";


    angular.module("casino.models.player", ["casino.functions.main", "casino.models.base"])
        .factory("Player", function (main, BaseModel) {

            /**
             * A data model is a classic JavaScript Object
             * it begins with a constructor function initialising the data model
             */
            /**
             * @class Player
             * @inherits from BaseModel
             * @param obj
             * @constructor
             */
            var PlayerModel = function (obj) {
                /**
                 * In order to get classical inheritance,
                 *  we call the constructor of the Object we want it to inherit the
                 *  blueprint from.
                 *
                 *  As a JavaScript developer you should understand the differences
                 *  between prototypal and classical inheritance.
                 *
                 *  Prototypal inheritance is great, it allows you to to collect functions
                 *  from other place to manipulate your state. prototypal OO :)
                 *
                 *  Classical inheritance is the give you classic OO. It's a powerful yet dangreous way
                 *  of doing OO. Most developers avoid it rightfully so. You want to avoid the banana gorilla problem
                 *      "You wanted a banana but you got a gorilla holding the banana"
                 *
                 */
                BaseModel.apply(this, arguments);
                this.name = obj.name;
                this.cards = obj.cards || [];
            };

            /**
             * We also want to inherit all the method from the parent Object
             * we do this by merging the prototype object with our own custom methods.
             */
            PlayerModel.prototype = angular.extend(Object.create(BaseModel.prototype), {
                /**
                 *
                 * @param card
                 */
                take: function (card) {
                    this.cards.push({
                        suit: card.substr(0, 1),
                        face: card.substr(1)
                    })
                },
                /**
                 *
                 * @returns String
                 */
                calculateScore: function () {
                    return main.getBlackJackScore(main.flatten(this.cards));
                }
            });

            return PlayerModel;
        });

}());