var express = require("express");
var router = express.Router();
var ctrlTrips = require("../controllers/trips");

// GET: /trips - returns all trips
router.get("/trips", (req, res) => {
  ctrlTrips.tripsList(req, res);
});

// GET: /trips/:tripCode - returns a single trip
router.get("/trips/:tripCode", (req, res) => {
  ctrlTrips.tripsFindByCode(req, res);
});

module.exports = router;