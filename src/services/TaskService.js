import { TaskModel } from "../models/TaskModel.js";

export const TaskService = {
  criarTarefa: async (titulo, categoria, userId) => {
    await TaskModel.create({ titulo, categoria, createdBy: userId });
  },

  listarTarefas: async (userId) => {
    return await TaskModel.findByUserId(userId);
  },

  atualizarTarefa: async (id, titulo, categoria) => {
    await TaskModel.update(id, { titulo, categoria });
  },

  deletarTarefa: async (id) => {
    await TaskModel.delete(id);
  },
};