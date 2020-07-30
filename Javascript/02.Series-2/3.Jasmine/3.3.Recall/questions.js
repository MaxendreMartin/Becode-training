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
    let arr = [];
    array.forEach((e) => {
        arr.push(e.split("").reverse().join(""));
    });
    return arr;
};

let everyPossiblePair = (array) => {
    let arr = [];
    array.sort();
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (i != j) arr.push([array[i], array[j]]);
        }
    }
    return arr;
};

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
};

let addElementToBeginning = (array, element) => {
    var arr = array;
    arr.unshift(1);
    return arr;
};

let sortByLastLetter = (array) => {
    return reverseWordsInArray(reverseWordsInArray(array).sort());
};

let getFirstHalf = (string) => {
    return string.substr(0, Math.ceil(string.length / 2));
};

let makeNegative = (number) => {
    return -Math.abs(number);
};

let numberOfPalindromes = (array) => {
    count = 0;
    for (let i = 0; i < array.length; i++) {
        if (
            array[i].charAt(0) === array[i].charAt(array[i].length - 1) &&
            array[i].charAt(1) === array[i].charAt(array[i].length - 2)
        ) {
            count += 1;
        }
    }
    return count;
};

let shortestWord = (array) => {
    return array
        .filter((e) => typeof e === "string")
        .sort((a, b) => a.length - b.length)[0];
};

let longestWord = (array) => {
    let maxLength = 0;
    let result = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > maxLength) {
            maxLength = array[i].length;
            result = array[i];
        }
    }
    return result;
};

let sumNumbers = (array) => {
    var sum = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    return sum;
};

let repeatElements = (array) => {
    array.push(...array);
    return array;
};

let stringToNumber = (string) => {
    return Number(string);
};

let calculateAverage = (array) => {
    return sumNumbers(array) / array.length;
};

let getElementsUntilGreaterThanFive = (array) => {
    let arr = [];
    for (let i = 0; i <= array.length && array[i] <= 5; i++) arr.push(array[i]);
    return arr;
};

let convertArrayToObject = (array) => {
    let obj = {};
    for (let i = 0; i < array.length; i += 2) {
        obj[array[i]] = array[i + 1];
    }
    return obj;
};

let getAllLetters = (array) => {
    let split = [];
    for (let i = 0; i < array.length; i++) {
        let x = array[i].split("");
        for (let j = 0; j < x.length; j++) {
            split.push(x[j]);
        }
    }
    return [...new Set(split.sort())];
};

let swapKeysAndValues = (object) => {
    let ret = {};
    for (let key in object) {
        ret[object[key]] = key;
    }
    return ret;
};

let sumKeysAndValues = (object) => {
    let sum = 0;
    Object.keys(object).forEach((key) => {
        sum += Number(object[key]) + Number(key);
    });
    return sum;
};

let removeCapitals = (string) => {
    return string.replace(/(\b[A-Z])/g, "");
};

let roundUp = (number) => {
    return Math.ceil(number);
};

let formatDateNicely = (date) => {
    let month = date.getUTCMonth() + 1;
    let years = date.getFullYear();
    let day = date.getDate();
    return "0" + day + "/" + "0" + month + "/" + years;
};

let getDomainName = (string) => {
    return string.slice(string.indexOf("@") + 1, string.lastIndexOf("."));
};

let titleize = (string) => {
    //a faire
};

let checkForSpecialCharacters = (string) => {
    return string.replace(/[a-zA-Z0-9]/g, "").length > 0;
};

let squareRoot = (number) => {
    return Math.sqrt(number);
};

let factorial = (number) => {
    let x = 1;
    for (let i = number; i > 1; i--) {
        x *= i;
    }
    return x;
};

let findAnagrams = (string) => {};

let convertToCelsius = (number) => {
    return Math.round((number - 32) * (5 / 9));
};

let letterPosition = (array) => {
    let arr = [];
    array.forEach((element) => {
        arr.push(element.toLowerCase().charCodeAt(0) - 96);
    });

    return arr;
};
