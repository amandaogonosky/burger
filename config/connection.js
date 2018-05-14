// mysql connect
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL){
connection =mysql.createConnection(process.env.JAWSDB_URL);
} else{
connection =mysql.createConnection({
host: "localhost",
user: "root",
password: "root",
database: "burgah_db"

});

}


// mysql://dnph00ip4p215c6e:yf5px5uqy42804n4@s0znzigqvfehvff5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/uv9i2vivkcol1gdw

// var connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgah_db"
// });

// connect to the database with error handeling
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// exporting the connection to the mysql burgah db
module.exports = connection;
