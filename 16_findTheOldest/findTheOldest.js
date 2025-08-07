const findTheOldest = function(arr) {
    const newArr =  arr.map((person) => {
        let lastYear = person.yearOfDeath || 2025;
        return {
            name: person.name,
            age: lastYear - person.yearOfBirth
        };
    });

    const oldest = newArr.reduce((person, current) => {
        return current.age > person.age ? current : person;
    })

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
