import  Express  from "express";
import { login, logout, register } from "../controllers/auth.controllers.js";

const router = Express.Router();

router.post("/login", login);

router.post("/register", register);

router.post("/logout", logout);

export default router;