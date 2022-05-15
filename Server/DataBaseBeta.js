var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "MovieVsLife"
});

// getting the likes for the movie

var GetLikesData = function GetLikes() {

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM MovieLike", function (err, result, fields) {
            if (err) throw err;
            console.log(result);
        });
    });
}

module.exports.GetLikesData = GetLikesData;

// To add or update the likes of a movie

function ModifyMovieLikes(Likes, Id_Movie) {

    var MovieExists = null;

    // check if the movie exists and return a value if it exist
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT Id_Movie FROM MovieLike WHERE Id_Movie = "+Id_Movie+"", function (err, ResultSelect, fields) {
            if (err) throw err;
            console.log(ResultSelect);
            var MovieExists = ResultSelect
        });
    });

    if (MovieExists != Id_Movie) {
      con.connect(function(err) {
        var sql = "INSERT INTO MovieLike (Likes, Id_Movie) VALUES("+Likes+", "+Id_Movie+")";
        con.query(sql, function (err, ResultGet) {
          if (err) throw err;
          console.log(ResultGet.affectedRows + " Values inserted");
        });
      });
    } 
    else {
      con.connect(function(err) {
        var sql = "UPDATE MovieLike SET Likes="+Likes+", Id_Movie="+Id_Movie+" WHERE Id_Movie="+Id_Movie+"";
        con.query(sql, function (err, ResultGet) {
          if (err) throw err;
          console.log(ResultGet.affectedRows + " record(s) updated");
        });
      });
    }
}