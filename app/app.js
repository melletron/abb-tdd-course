(function () {
    "use strict";

    /**
     * For this proof of concept I am creating a JavaScript Object
     *  to store the Angular.js module names.
     *  This way we can get a distinct list og ng-modules
     */
    var lazy = {};

    /**
     * First we retrieve all DOM nodes that have the attribute ng-lazy-load
     * this tells us it is a node that needs an angular widget bound to it.
     *
     */
    var ngNodes = document.querySelectorAll('[ng-lazy-load]');

    /**
     * Then we iterate over that nodelist so we can extract the module name
     */
    [...ngNodes].forEach(el => {
        /**
         * By assigning the module name as key to the Object literal
         *  we can distinctly get all the module names in one collection
         */
        lazy[el.getAttribute('ng-lazy-load')] = true;
    });

    /**
     * We give angular.bootstrap the nodelist we retrieved earlier
     * and we pass the collection of angular modules
     *
     * Now, for production code we may want to do some input validation on the
     * module names, but for a PoC this is sufficient.
     *
     */
    ngNodes.forEach(node => {

        angular.bootstrap(node, [node.getAttribute('ng-lazy-load')]);
    });

    // angular.bootstrap(ngNodes, Object.keys(lazy));
}());