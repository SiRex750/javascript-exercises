const palindromes = function (string) {
    let newString = "", revString = "";
    string = string.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if ((string[i] >= 'a' && string[i] <= 'z') || (string[i] >= '0' && string[i] <= '9')) {
            newString += string[i];
        }
    }
    for (let i = newString.length - 1; i > -1; i--) {
        revString += newString[i];
    }
    if (newString === revString) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
