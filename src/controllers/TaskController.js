import { TaskServiceInterface } from "../interfaces/TaskServiceInterface.js";
import { TaskService } from "../services/TaskService.js";

export const TaskController = (taskService = TaskServiceInterface) => ({
  criarTarefa: async (req, res) => {
    const { titulo, categoria } = req.body;
    await taskService.criarTarefa(titulo, categoria, req.usuario.id);
    res.status(201).json({ message: "Tarefa criada" });
  },

  listarTarefas: async (req, res) => {
    const tasks = await taskService.listarTarefas(req.usuario.id);
    res.status(200).json(tasks);
  },

  atualizarTarefa: async (req, res) => {
    const { titulo, categoria } = req.body;
    await taskService.atualizarTarefa(req.params.id, titulo, categoria);
    res.status(200).json({ message: "Tarefa atualizada" });
  },

  deletarTarefa: async (req, res) => {
    await taskService.deletarTarefa(req.params.id);
    res.status(200).json({ message: "Tarefa deletada" });
  },
});