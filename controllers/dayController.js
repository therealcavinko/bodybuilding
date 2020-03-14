const db = require("../models")
module.exports = {

    findDayByuserId: function(req, res) {
        db.Day
        .find({userId: req.params.userId}, null, {sort: {date: -1}, limit: 7} )
        .populate("exercises")
        .then(dbDays => {
            return res.json(dbDays)
        })
        .catch(err => res.status(422).json(err));
    }

}