const router = require("express").Router();
const authController = require("../controllers/authController");
const User = require("../models/User");

router.get("/", (req, res) => {
  res.send("ok auth router");
});
router.post("/register", authController.register_post);
router.post("/login", async (req, res) => {
  const {email, password} = req.body;
  try {
      const user = await User.login(email, password);
      res.status(200).json(user)
  } catch (error) {
      console.log(error);
      res.status(400).json({error})
  }
});
module.exports = router;
