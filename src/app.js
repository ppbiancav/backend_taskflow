import express from "express";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "../swagger.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  swaggerOptions: { persistAthorization: true }
}));

app.use("/login", authRoutes);       
app.use("/tarefas", taskRoutes);     

app.listen(8000, () => console.log("Servidor rodando em http://localhost:8000"));