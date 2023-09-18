const express = require("express");

const router = express.Router();

const User = require("../Schema/userschema");

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await User.findOne({ email });
    if (password == data.password) {
      res.status(200).send({ data, token: "hjhkjlitufyityfhgyiuhgjh" });
    } else {
      res.status(400).send("Something wrong");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const data = await User({ name, email, password, phone }).save();
    res.status(200).send({ data, token: "fhghyitrfyhg" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
