var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Insecure",
  database: "burgers_db"
});

connection.connect(function(err) {
  console.error("This aint working bitch: " )

  console.log("connected")
})

module.exports(connection);
