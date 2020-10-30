const connection = require("./connection.js");

function objToSql(obj) {
    let arr = [];

    for (let key in obj[key]) {
        let value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        };
    };
    return arr.toString();
}

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


const orm = {
    selectAll: function(table, cb) {
        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result)
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);

        connection.query(queryString, "", function(err, result) {
            if (err) throw err;

            cb(result);
        });
    },
}

module.exports = orm;