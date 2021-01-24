const router = require("express").Router();

router.use("/campuses", require("./campusAPI/campus"));
router.use("/students", require("./studentAPI"))

module.exports = router;
