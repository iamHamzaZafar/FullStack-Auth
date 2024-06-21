import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  const hashedPassword = await bcrypt.hash(password , 10) ;
  console.log(hashedPassword);
  try {

    const existingUser = await User.findOne({email}) ;
    if(existingUser) {
        return res.status(400).json({ msg: "User already exists" });
    }
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    res.status(200).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(501).json({ msg: "Error Creating User" });
  }
 
};

export default signup;
