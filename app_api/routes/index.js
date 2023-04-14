var express = require("express");
var router = express.Router();
var ctrlTrips = require("../controllers/trips");

// GET: /trips - returns all trips
router.get("/trips", (req, res) => {
  ctrlTrips.tripsList(req, res);
});

router.post("/trips", (req, res) => {
  ctrlTrips.addTrip(req, res);
});

// GET: /trips/:tripCode - returns a single trip
router.get("/trips/:tripCode", (req, res) => {
  ctrlTrips.tripsFindByCode(req, res);
});

// PUT: /trips/:tripCode - updates a single trip
router.put("/trips/:tripCode", (req, res) => {
ctrlTrips.tripsUpdateTrip(req, res);
});

module.exports = router;