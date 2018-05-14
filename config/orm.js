// config folder/ connection file where the mysql is set up
const connection = require("../config/connection.js");

// this is creating and looping through an array
function queryHere(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function sqlReader(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
  
    if (Object.hasOwnProperty.call(ob, key)) {
      
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      
      arr.push(key + "=" + value);
    }
  }
//   get the info in the arr and return the info to string of characters
  return arr.toString();
}

const orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result); 
    //   callback which returns the results of the data from the SQL  query?
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += queryHere(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
//   will update the object column values (for my burger table it would be burger_name and devoured)
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
 
};

// Export to the burger file
module.exports = orm;
// selectAll()
// insertOne()
// updateOne()


