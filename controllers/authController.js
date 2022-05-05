const User = require("../models/User");

//register
 const register_post = async (req, res) => {
  const {username,email, password} = req.body;

  try {
      const user = await User.create({username,email,password});
      res.status(201).json(user);
  } catch (error) {
      console.log(error);
      res.status(400).json(error)
  }
};

//login user
const login_post = async (req, res) => {
    const {email, password} = req.body;
    try {
        const user = await User.login(email, password);
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json({error})
    }
}
module.exports = {register_post, login_post};
