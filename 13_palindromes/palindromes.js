const palindromes = function (string) {
    console.log(string.slice(-1));
    return (string === string.slice(-1));
};

// Do not edit below this line
module.exports = palindromes;
