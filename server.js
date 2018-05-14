
const express = require("express");
const bodyParser = require ("body-parser");
const PORT = process.env.PORT || 3000;

const app = express();
// const server = http.createServer(handleRequest);
// .use is how we access express and run the index file
app.use(express.static(__dirname + "views"));
app.use(app.router);

app.use(bodyParser.urlencoded({ extended: true}));

// parse data/user input from the page body into notation the server can read/and back to the end user
app.use(bodyParser.json());
// require handle-bar templating
var handlbar = require("express-handlebars");


// access the controllers file to handle server access to routes we created
const routes = require("./controllers/burgers_controller.js");


// Start our server-this should show what id your on
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});


// junk code i mucked around with
// function handleRequest(req, res) {

//   // Saving the request data as a variable
//   var burgerData = "";
  
// // var path =req.url;
//   // When the server receives data...
//   req.on("data", function(data) {

//     // Add it to burgerData to store the info of the request/input.
//     burgerData += data;
//   });

//   // i guess we need to something when the request is met
//   req.on("end", function() {
//     // Log (server-side) the request method, as well as the data received!
//     console.log("What burger", req.method, "burger magic:\n", burgerData);
//     res.end();
//   });

// }