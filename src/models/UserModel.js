import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const UserModel = {
  findByEmail: (email) => prisma.user.findUnique({ where: { email } }),
};