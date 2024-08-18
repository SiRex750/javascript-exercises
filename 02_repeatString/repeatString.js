const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let reString = "";
    for(let i = 0; i < num; i++) {
        reString += string;
    }
    return reString;
};

// Do not edit below this line
module.exports = repeatString;
