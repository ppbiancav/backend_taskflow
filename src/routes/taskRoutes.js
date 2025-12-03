import express from "express";
import { TaskController } from "../controllers/TaskController.js";
import { AuthService } from "../services/AuthService.js";

const router = express.Router();

router.post("/", AuthService.autenticarToken, TaskController.criarTarefa);
router.get("/", AuthService.autenticarToken, TaskController.listarTarefas);
router.put("/:id", AuthService.autenticarToken, TaskController.atualizarTarefa);
router.delete("/:id", AuthService.autenticarToken, TaskController.deletarTarefa);

export default router;

