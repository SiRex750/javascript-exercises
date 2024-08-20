const leapYears = function(year) {
    let c = 0;
    if (year % 4 == 0) {
        c++;
    }
    if (year % 100) {
        c--;
    }
    if (year % 400) {
        c++;
    }
    if (c == 1) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
