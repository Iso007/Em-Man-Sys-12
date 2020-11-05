const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    // Username
    user: "root",
    // Password
    password: "ismael01",
    database: "employees"
});

connection.connect();

// Setting up connection.query to use pomises instead of callbacks
// This allows us to use the async
connection.query = util.promisify(connection.query);

module.exports = connection;