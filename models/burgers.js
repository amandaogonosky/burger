const orm = require("../config/orm.js");
const burgers = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays so it will store the burger name/status .
    create: function(cols, vals, cb) {
      orm.create("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
   
  };
  
//   exporting the functions for the controller or routes
  module.exports = burgers;
  












// $(function() {
//     $(".eat-burger").on("click", function(event) {
//       var id = $(this).data("id");
//       var newBurger = $(this).data("newburger");
  
//       var newBurger = {
//         devoured: newBurger
//       };
  
//       $.ajax("/api/burger" + id, {
//         type: "PUT",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("new burgers", newBurger);
          
//           location.reload();
//         }
//       );
//     });
  
//     $(".create-form").on("submit", function(event) {
//       //  preventDefault on a submit event.
//       event.preventDefault();
  
//       const newBurger = {
//         name: $("#ca").val().trim(),
//         sleepy: $("[burger=devoured]:checked").val().trim()
//       };
  
//       // Send the POST request.
//       $.ajax("/api/burger", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("created new burger");
//           // Reload the page to get the updated list
//           location.reload();
//         }
//       );
//     });
  
//     $(".devoured-burger").on("click", function(event) {
//       var id = $(this).data("id");
  
//       $.ajax("/api/burger/" + id, {
//         type: "DELETE"
//       }).then(
//         function() {
//           console.log("devoured", id);
          
//           location.reload();
//         }
//       );
//     });
//   });
  