const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const response = require("./response");
const secret = "test";

const signin = async (req, res) => {
  const { email, password } = req.body; // request body parsing

  try {
    const existUser = await User.findOne({ email });

    if (!existUser)
      return res.status(404).json({ message: response.userDoesNotExist });

    const isPasswordCorrect = await bcrypt.compare(password, existUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: response.invalidPassword});

    const token = jwt.sign({ email: existUser.email, id: existUser._id }, secret, {
      expiresIn: "1h",
    });

    const user = {
      id: existUser._id,
      name: `${existUser.firstName} ${existUser.lastName}`,
      image: existUser.image,
      isEditor: existUser.isEditor
    };

    res.status(200).json({ user , token });
  } catch (err) {
    res.status(500).json({ message: response.unexpectedError});
  }
};
  

const signup = async (req, res) => {
  let { email, phone, password, firstName, lastName } = req.body;

  try {
    let existUser = await User.findOne({ email });

    if (existUser)
      return res.status(400).json({ message: response.userAlreadyExist });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      firstName: firstName,
      lastName: lastName,
      email,
      phone,
      password: hashedPassword,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "1h",
    });

    res.status(201).json({result , token });

  } catch (error) {
    res.status(500).json({ message: response.unexpectedError });
  }
}

module.exports = { signin, signup };