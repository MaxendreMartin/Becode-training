//07-classes/02-methods/script.js - 7.2: methods

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        class Person {
            constructor(firstname, lastname) {
                this.firstname = firstname;
                this.lastname = lastname;
            }
            SayHello() {
                let hello =
                    "Hello, " + this.firstname + " " + this.lastname + " !";
                return hello;
            }
        }
        const maxendre = new Person("Martin", "Maxendre");
        console.log(maxendre.SayHello());
    });
})();
