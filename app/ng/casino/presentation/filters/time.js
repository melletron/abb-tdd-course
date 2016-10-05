(function () {
    "use strict";
    angular.module("casino.presentation.filters.time", [])
        .filter("prettify", function () {
            const time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 };
            const timeKeys = Object.keys(time);

            return seconds => {

                if (seconds === 0) {
                    return "none";
                }

                let res = [];

                timeKeys.forEach(key => {
                    if (seconds >= time[key]) {
                        let val = Math.floor(seconds / time[key]);
                        res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
                        seconds = seconds % time[key];
                    }
                });

                return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/, ' and' + '$1') : res[0];
            };
        });
}());