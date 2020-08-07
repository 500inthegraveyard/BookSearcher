var path = require ("path");
const router = require("express").Router();
const { Router } = require("express");

  router.get("/exercise", function(req, res) {
    console.log("paths")
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
        
      });
      




module.exports = router;