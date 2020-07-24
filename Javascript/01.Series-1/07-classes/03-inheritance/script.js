// 07-classes/03-inheritance/script.js - 7.3: inheritance

(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        const cat = new Animal();
        cat.name = "Havana";
        cat.constructor.greeting = "Hello";

        const dog = new Animal();
        dog.name = "Franco";

        console.log(cat.sayHello());
        console.log(dog.sayHello());
    });
})();
