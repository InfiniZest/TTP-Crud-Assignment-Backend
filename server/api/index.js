const router = require("express").Router();

router.use("/campuses", require("./campus"));

module.exports = router;
