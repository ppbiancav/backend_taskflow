import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import 'dotenv/config';

const prisma = new PrismaClient();

async function main() {
  const root1234 = await bcrypt.hash("123456", 10);

  await prisma.user.create({
    data: {
      email: "admin@gmail.com",
      senha: root1234
    }
  });

  console.log("Usuário admin criado");
}

main();
