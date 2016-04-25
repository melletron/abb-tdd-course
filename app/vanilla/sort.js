function sort(array) {
    "use strict";
    var table = { A: 2, K: 3, Q: 4, J: 5, 10: 6, 9: 7, 8: 8, 7: 9, 6: 10, 5: 11, 4: 12, 3: 13, 2: 14, '♣': 39, '♦': 26, '♥': 13, '♠': 0}, returnArray = [];
    return array.forEach(function (el) {
        returnArray[table[el[0]] + table[el.substr(1)] - 2] = el;
    }) || returnArray;
}