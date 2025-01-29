const express = require("express");
const { userAuth } = require("../middlewares/auth");

const profileRouter = express.Router();

profileRouter.get("/profile", userAuth, async (req, res) => {
  try {
    const cookies = req.cookies;

    const { token } = cookies;
    if (!token) {
      throw new Error("Invalid Token");
    }

    //Validate my token
    const decodedMessage = await jwt.verify(token, "DEV@Tinder$790");
    const { _id } = decodedMessage;

    const user = req.user;
    if (!user) {
      throw new Error("User Doesn't exist");
    }

    res.send(user);
  } catch (err) {
    res.status(400).send("ERROR : " + err.message);
  }
});

module.exports = profileRouter;
