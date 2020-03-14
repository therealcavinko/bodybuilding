const router = require("express").Router()
const healthTrackerRoutes = require("./bodybuilding");
router.use("/bodybuilding", bodybuildingRoutes);

module.exports = router;