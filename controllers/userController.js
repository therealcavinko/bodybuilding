const db = require("../models")
const moment = require("moment")

module.exports = {
    findUserById: function(req, res) {
        db.User
        .findByIdAndUpdate({_id: req.params.id})
        .select("-__ -password")
        .populate({
            path: "days",
            options: {
                sort: {
                    date: -1
                }
            },
            select: "-__",
            populate: {
                path: "exercises",
                model: "Exercise",
                select: "-__"
            }
        })
        .then((userModel) => res.json(userModel))
        .catch(err => res.status(404).json(err));
    },

    createUser: function(req, res) {
        db.User
        .create(req.body)
        .then(userModel => res.json(userModel))
        .catch(err => res.status(404).json(err));
    

    updateUser: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    }
    
    removeUser: function(req, res) {
        db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    }
    }
}