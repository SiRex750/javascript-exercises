const palindromes = (string) => {
    let newString = string.toLowerCase().split('').filter(char => (char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')).join('');
    let revString = newString.split('').reverse().join('');
    return newString === revString;
};

// Do not edit below this line
module.exports = palindromes;
