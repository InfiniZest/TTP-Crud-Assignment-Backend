const router = require("express").Router();

router.use("/campuses", require("./campus"));
router.use("/students", require("./student"));

module.exports = router;
