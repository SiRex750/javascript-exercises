const reverseString = function(string) {
    let revString = "";
    stringLength = string.length;
    for (let i = (stringLength - 1); i > -1; i--) {
        let char = string.at(i);
        revString += char;
    }
    return revString;
};

// Do not edit below this line
module.exports = reverseString;
