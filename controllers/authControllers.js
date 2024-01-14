import { compairPassword, hashPassword } from "../helpers/authHelpers.js";
import UserModel from "../models/userModels.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  const { name, email, password, phone, address, answer } = req.body;

  try {
    //validation
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "email is Required" });
    }
    if (!password) {
      return res.send({ message: "password is Required" });
    }
    if (!phone) {
      return res.send({ message: "phone is Required" });
    }
    if (!address) {
      return res.send({ message: "address is Required" });
    }
    if (!answer) {
      return res.send({ message: "answer is Required" });
    }
    //Check user
    const exisitinguser = await UserModel.findOne({ email });

    //exisiting user
    if (exisitinguser) {
      return res.status(200).send({
        success: true,
        message: "Error in Registration",
      });
    }

    //Register user
    const hashedPassword = await hashPassword(password);
    //SAVE
    const user = await new UserModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
      answer,
    }).save();
    res.status(201).send({
      success: true,
      message: "user  Register successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};

//POST LOGIN

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "email is not registerd",
      });
    }

    const match = await compairPassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }

    // token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

export const testController = (req, res) => {
  res.send("Protected Routes");
};

// forgetPaswordController
export const forgetPaswordController = async (req, res) => {
  try {
     const {email, answer, newPassword} = req.body;
  
  
    if (!email) {
      res.status(400).send({ message: "Email is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "newPassword is required" });
    }
    //check email ans
    const user = await UserModel.findOne({ email, answer });
   
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "wrong Email or Password"
      });
    }
    const hashed = await hashPassword(newPassword);
    await UserModel.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: "password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Somthing went Wrong",
      error,
    });
  }
};
