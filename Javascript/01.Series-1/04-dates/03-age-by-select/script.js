// 04-dates/03-age-by-select/script.js - 4.3: calculate the age

(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let dateObj = new Date();
        let dayA = dateObj.getDate();
        let monthA = dateObj.getMonth() + 1;
        let yearA = dateObj.getFullYear();

        let actualDate = dayA + "/" + monthA + "/" + yearA;
        console.log(actualDate);

        let d = document.getElementById("dob-day");
        let dayU = d.options[d.selectedIndex].value;
        let m = document.getElementById("dob-month");
        let monthU = m.options[m.selectedIndex].value;
        let y = document.getElementById("dob-year");
        let yearU = y.options[y.selectedIndex].value;

        console.log(dayU + "/" + monthU + "/" + yearU);

        let daysA = yearA * 365.25 + monthA * 30.42 + dayA;
        console.log(daysA);

        let daysU = yearU * 365.25 + monthU * 30.42 + dayU;
        console.log(daysU);

        let result = daysA - daysU;
        let ageU = Number(Math.floor(result / 365.25));
        alert("Tu as " + ageU + " ans.");
    });
})();
