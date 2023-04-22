var express = require("express");
var router = express.Router();
const jwt = require("express-jwt");
const auth = jwt.expressjwt({
  secret: process.env.JWT_SECRET,
  requestProperty: "payload",
  algorithms: ['HS256', 'RS256']
});

var ctrlAuth = require("../controllers/authentication");
var ctrlTrips = require("../controllers/trips");

router.post("/register", ctrlAuth.register);
router.post("/login", ctrlAuth.login);

// GET: /trips - returns all trips
router.get("/trips", (req, res) => {
  ctrlTrips.tripsList(req, res);
});

router.post("/trips", auth, (req, res) => {
  ctrlTrips.addTrip(req, res);
});

// GET: /trips/:tripCode - returns a single trip
router.get("/trips/:tripCode", (req, res) => {
  ctrlTrips.tripsFindByCode(req, res);
});

// PUT: /trips/:tripCode - updates a single trip
router.put("/trips/:tripCode", auth, (req, res) => {
  ctrlTrips.tripsUpdateTrip(req, res);
});

module.exports = router;