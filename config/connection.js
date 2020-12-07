const mysql = require("mysql");


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

// const connection = mysql.createConnection({
//     host: "jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     port: 3306,
//     user: "bfe5zhncz72gyt8e",
//     password: "bbm0x7i90hsb4dj0",
//     database: "f4yoscukp3vr4gi5"
// });

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

/*
Connection to Heroku
host: jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com

Connection Username: bfe5zhncz72gyt8e

password: bbm0x7i90hsb4dj0

database: f4yoscukp3vr4gi5


Connection for localhost

    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"

    desolate-coast-57642

    */