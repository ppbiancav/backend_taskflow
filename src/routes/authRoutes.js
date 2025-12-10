import express from "express";
import { AuthController } from "../controllers/AuthController.js";
import { AuthService } from "../services/AuthService.js";

const router = express.Router();

const authController = AuthController(AuthService);

router.post("/", authController.login);

export default router;