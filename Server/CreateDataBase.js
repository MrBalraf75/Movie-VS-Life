var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE MovieVsLife", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
});

CreateTable();

function CreateTable() {
    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "MovieVsLife"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "CREATE TABLE MovieLike (Id INT AUTO_INCREMENT PRIMARY KEY, Likes INT, Id_Movie INT)";
      con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("Table created");
      });
    });
}