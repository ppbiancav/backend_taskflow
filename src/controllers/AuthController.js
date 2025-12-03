import { AuthService } from "../services/AuthService.js";

export const AuthController = {
  login: async (req, res) => {
    const { email, senha } = req.body;
    try {
      const token = await AuthService.login(email, senha);
      res.json({ token });
    } catch (erro) {
      res.status(401).json({ erro: erro.message });
    }
  },
};