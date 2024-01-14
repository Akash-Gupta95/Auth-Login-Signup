import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetPaswordController,
} from "../controllers/authControllers.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//Routers object

const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN POST

router.post("/login", loginController);

// forget password
router.post("/forgetPassword", forgetPaswordController)

//test routes
router.get("/test", requireSignIn, isAdmin, testController);
//protected routes
router.get('/user-auth',requireSignIn , (req,res)=>{
  res.status(200).send({ok:true});
} )

export default router;
