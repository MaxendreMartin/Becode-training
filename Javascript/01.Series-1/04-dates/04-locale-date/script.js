// 04-dates/04-locale-date/script.js - 4.4: textual date

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    var date = new Date();
    var format = "YYYY-MMM-DD DDD";
    document.write(dateConvert(date, format));

    function dateConvert(dateobj, format) {
        var year = dateobj.getFullYear();
        var month = ("0" + (dateobj.getMonth() + 1)).slice(-2);
        var date = ("0" + dateobj.getDate()).slice(-2);
        var hours = ("0" + dateobj.getHours()).slice(-2);
        var minutes = ("0" + dateobj.getMinutes()).slice(-2);
        var seconds = ("0" + dateobj.getSeconds()).slice(-2);
        var day = dateobj.getDay();
        var months = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];
        var dates = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        var converted_date = "";

        switch (format) {
            case "YYYY-MM-DD":
                converted_date =
                    year + " " + month + " " + date + ", " + hours + minutes;
                break;
            case "YYYY-MMM-DD DDD":
                converted_date =
                    dates[parseInt(day)] +
                    " " +
                    date +
                    " " +
                    months[parseInt(month) - 1] +
                    " " +
                    year +
                    ", " +
                    hours +
                    "h" +
                    minutes;

                break;
        }

        return converted_date;
    }
})();
