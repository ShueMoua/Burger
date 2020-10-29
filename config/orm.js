const connection = require("./connection.js");

const orm = {
    selectAll: function() {
        let queryString = "";
        connection.query(queryString, "", function(err, results) {
            if (err) throw err;
        });
    },
    insertOne: function() {
        let queryString = "";
        connection.query(queryString, "", function(err, results) {
            if (err) throw err;
        });
    },
    updateOne: function() {
        let queryString = "";
        connection.query(queryString, "", function(err, results) {
            if (err) throw err;
        });
    },
}

module.exports = orm;