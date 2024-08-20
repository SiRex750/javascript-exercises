const removeFromArray = function(array, ...removeArray) {
    let newArray = [];
    array.forEach((item) => {
        if (!removeArray.includes(item)) {
            newArray.push(item);
        }
    })
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
