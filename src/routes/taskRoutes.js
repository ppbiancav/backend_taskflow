import express from "express";
import { TaskController } from "../controllers/TaskController.js";
import { AuthService } from "../services/AuthService.js";
import { TaskService } from "../services/TaskService.js";

const router = express.Router();
const taskController = TaskController(TaskService);

router.post("/", AuthService.autenticarToken, taskController.criarTarefa);
router.get("/", AuthService.autenticarToken, taskController.listarTarefas);
router.put("/:id", AuthService.autenticarToken, taskController.atualizarTarefa);
router.delete("/:id", AuthService.autenticarToken, taskController.deletarTarefa);

export default router;

