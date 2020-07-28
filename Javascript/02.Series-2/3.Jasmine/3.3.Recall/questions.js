let selectElementsStartingWithA = (array) => {
    const startsWithA = array.filter((array) => array.startsWith("a"));
    return startsWithA;
};

let selectElementsStartingWithVowel = (array) => {
    const vowels = ["a", "e", "i", "o", "u"];
    const arr = [];
    array.forEach((e) => {
        if (vowels.includes(e.substr(0, 1))) arr.push(e);
    });
    return arr;
};

let removeNullElements = (array) => {
    var arr = array;
    var filtered = arr.filter(function (el) {
        return el != null;
    });
    return filtered;
};

let removeNullAndFalseElements = (array) => {
    var arr = array;
    var filtered = arr.filter(function (el) {
        return el !== null && el !== false;
    });
    return filtered;
};

let reverseWordsInArray = (array) => {
    return "Write your method here";
};

let everyPossiblePair = (array) => {
    Array.prototype.pairs = function (func) {
        for (var i = 0; i < this.length - 1; i++) {
            for (var j = i; j < this.length - 1; j++) {
                func([this[i], this[j + 1]]);
            }
        }
    };

    var list = array;
    list.pairs(function (pair) {
        console.log(pair); // [1,2], [1,3], [2,3]
    });
    return;
};

let allElementsExceptFirstThree = (array) => {
    return "Write your method here";
};

let addElementToBeginning = (array, element) => {
    return "Write your method here";
};

let sortByLastLetter = (array) => {
    return "Write your method here";
};

let getFirstHalf = (string) => {
    return "Write your method here";
};

let makeNegative = (number) => {
    return "Write your method here";
};

let numberOfPalindromes = (array) => {
    return "Write your method here";
};

let shortestWord = (array) => {
    return "Write your method here";
};

let longestWord = (array) => {
    return "Write your method here";
};

let sumNumbers = (array) => {
    return "Write your method here";
};

let repeatElements = (array) => {
    return "Write your method here";
};

let stringToNumber = (string) => {
    return "Write your method here";
};

let calculateAverage = (array) => {
    return "Write your method here";
};

let getElementsUntilGreaterThanFive = (array) => {
    return "Write your method here";
};

let convertArrayToObject = (array) => {
    return "Write your method here";
};

let getAllLetters = (array) => {
    return "Write your method here";
};

let swapKeysAndValues = (object) => {
    return "Write your method here";
};

let sumKeysAndValues = (object) => {
    return "Write your method here";
};

let removeCapitals = (string) => {
    return "Write your method here";
};

let roundUp = (number) => {
    return "Write your method here";
};

let formatDateNicely = (date) => {
    return "Write your method here";
};

let getDomainName = (string) => {
    return "Write your method here";
};

let titleize = (string) => {
    return "Write your method here";
};

let checkForSpecialCharacters = (string) => {
    return "Write your method here";
};

let squareRoot = (number) => {
    return "Write your method here";
};

let factorial = (number) => {
    return "Write your method here";
};

let findAnagrams = (string) => {
    return "Write your method here";
};

let convertToCelsius = (number) => {
    return "Write your method here";
};

let letterPosition = (array) => {
    return "Write your method here";
};
