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


  router.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      {_id: req.params.id},{$push: req.body.exercises}, {new: true}
    )
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  router.post("/api/workouts", ({ body }, res) => {
    console.log(body)
    db.Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });


  module.exports = router;