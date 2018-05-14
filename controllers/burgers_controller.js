
const express = require ("express");
const router = express.Router();
// create the router and export it

const burger = require ("../models/burgers.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      const hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burger", function(req, res) {
    burger.insertOne([
      "burger", "devoured"
    ], [
      req.body.burger, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
//   router is defined here
  router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
//   if no burger names have been added/changed then 404 is error handling for this
    burger.updateOne({
      burger: req.body.burger
    }, condition, function(result) {
      if (result.affectedRows == 0) {
       
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  router.delete("/api/burger/:id", function(req, res) {
    const condition = "id = " + req.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {

        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  

  module.exports = router;
  
 