const db = require("../models");
const { Router } = require("express");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });



  module.exports = router;