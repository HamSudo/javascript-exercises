const fibonacci = function(place) {
    place = parseInt(place);
    if (place < 0) return "OOPS";
    if (place == 0) return 0;

    let newSum = 1;
    let oldSum = 0;

    for (let i = 1; i < place; i++) {
        let temp = newSum;
        newSum += oldSum;
        oldSum = temp;
    }
    return newSum;
};

// Do not edit below this line
module.exports = fibonacci;
