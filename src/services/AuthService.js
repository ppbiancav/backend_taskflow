import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel.js";

const SECRET = process.env.SECRET || "MINHA_CHAVE_SECRETA";

export const AuthService = {
  login: async (email, senha) => {
    const user = await UserModel.findByEmail(email);
    if (!user) throw new Error("Usuário não encontrado");

    const senhaCorreta = await bcrypt.compare(senha, user.senha);
    if (!senhaCorreta) throw new Error("Senha incorreta");

    const token = jwt.sign({ id: user.id }, SECRET, { expiresIn: "1h" });
    return token;
  },

  autenticarToken: (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(403).json({ erro: "Token não enviado" });

    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET, (erro, usuario) => {
      if (erro) return res.status(403).json({ erro: "Token inválido" });
      req.usuario = usuario;
      next();
    });
  },
};