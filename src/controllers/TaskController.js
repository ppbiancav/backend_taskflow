import { TaskService } from "../services/TaskService.js";

export const TaskController = {
  criarTarefa: async (req, res) => {
    const { titulo, categoria } = req.body;
    await TaskService.criarTarefa(titulo, categoria, req.usuario.id);
    res.status(201).json({ message: "Tarefa criada" });
  },

  listarTarefas: async (req, res) => {
    const tasks = await TaskService.listarTarefas(req.usuario.id);
    res.status(200).json(tasks);
  },

  atualizarTarefa: async (req, res) => {
    const { titulo, categoria } = req.body;
    await TaskService.atualizarTarefa(req.params.id, titulo, categoria);
    res.status(200).json({ message: "Tarefa atualizada" });
  },

  deletarTarefa: async (req, res) => {
    await TaskService.deletarTarefa(req.params.id);
    res.status(200).json({ message: "Tarefa deletada" });
  },
};