var mysql = require('mysql2');

var con = mysql.createConnection({
   host: "localhost",
   user: "phpmyadmin",
   password:"Sesi2023",
   database: "caroline"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('caroline','rua 1')";
  con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("1 record inserted");
 });
});
