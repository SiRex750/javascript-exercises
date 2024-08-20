const sumAll = function(a, b) {
    if (a % 1 !== 0 || b % 1 !== 0) {
        return "ERROR";
    }
    else if (typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    }
    else if ( a < 0 || b < 0) {
        return "ERROR";
    }
    else {
        let sum = 0, x = 0, y = 0;
        if (a > b) {
            x = b;
            y = a;
        }
        else {
            x = a;
            y = b;
        }
        for (let i = x; i <= y; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
