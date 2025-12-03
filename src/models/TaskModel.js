import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const TaskModel = {
  create: (data) => prisma.task.create({ data }),
  findByUserId: (userId) => prisma.task.findMany({ where: { createdBy: userId } }),
  update: (id, data) => prisma.task.update({ where: { id }, data }),
  delete: (id) => prisma.task.delete({ where: { id } }),
};