const { Client } = require("pg");

let db = new Client({
  connectionString: "postgresql:///NNC",
});

db.connect();

module.exports = db;
