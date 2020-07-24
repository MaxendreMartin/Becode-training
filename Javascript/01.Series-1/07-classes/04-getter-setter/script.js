// 07-classes/04-getter-setter/script.js - 7.4: getter & setter

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        class Person {
            firstname = "Maxendre";
            lastname = "Martin";

            get name() {
                return `${this.firstname}${this.lastname}`;
            }
            set name(value) {
                let split = value.split(" ");
                this.firstname = split[0];
                this.lastname = split[1];
            }
        }
        let maxendre = new Person();
        maxendre.name = "Maxendre Martin";
        console.log(maxendre.name);
        console.log(maxendre);
    });
})();
