import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// create user Controller
export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please fill all the fields" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  try {
    const existingUser = await User.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (existingUser) {
      return res.status(409).json({
        msg: "An account with this email or username already exists",
        existingUser: true,
      });
    }
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(501).json({ msg: "Error Creating User" });
  }
};

// Sign in user Controller -)

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(401).json({ msg: "Required field is missing" });
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ msg: "User not Vallid" });
    }

    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(401).json({ msg: "Wrong Credential" });
    }

    // tokens
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const {password: hashedPassword , ...rest} = validUser._doc ; 
    const expiryDate = new Date (Date.now() + 3600000) ; // 1 hour
    res.cookie("access_token", token, { httpOnly: true  , expires :expiryDate });
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};
