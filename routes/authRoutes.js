const router = require("express").Router();
const authController = require("../controllers/authController");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("ok auth router");
});
router.post("/register", authController.register_post);
router.post("/login", authController.login_post);
module.exports = router;
