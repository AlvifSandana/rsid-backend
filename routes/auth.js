const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require('../helpers/jwt.helper');

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
      accesstoken: generateAccessToken(req.body.username)
    });

    newUser.save()
      .then((val) => {
        res.status(201).json(val);
      })
      .catch((err) => {
        res.status(500).json({message: err})
      })
    // console.log()
  } catch (err) {
    res.status(500).json({
      message: err
    });
  }
});

//LOGIN 
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if(user == null) return res.status(400).json("Wrong credentials!");

    const validated = await bcrypt.compare(req.body.password, user.password);
    if(!validated) return res.status(400).json("Wrong credentials!");
    
    user.accesstoken = generateAccessToken(req.body.username);
    user.save();
    const { password, ...others } = user._doc;
    return res.status(200).json(others);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

module.exports = router;
