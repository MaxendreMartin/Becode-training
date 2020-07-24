// 02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz

(() => {
    // your code here

    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            alert("fizzbuzz");
        } else if (i % 3 === 0) {
            alert("fizz");
        } else if (i % 5 === 0) {
            alert("buzz");
        } else {
            alert(i);
        }
    }
})();
