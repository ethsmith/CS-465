const mongoose = require("mongoose");
const Model = mongoose.model("trips");

const tripsList = async (req, res) => {
    Model
        .find({})
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

const tripsFindByCode = async (req, res) => {
    Model
        .find({'code': req.params.tripCode})
        .exec((err, trips) => {
            if (!trips) {
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }
        });
};

module.exports = {
    tripsList,
    tripsFindByCode
}