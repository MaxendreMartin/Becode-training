module.exports = function (app, passport) {
    // code here
};

app.get("/users", (req, res) => {
    let users;

    res.send(users);
});

const jsonfile = require("jsonfile");
