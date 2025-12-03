export const swaggerSpec = {
  openapi: "3.0.0",
  info: {
    title: "Task Flow",
    version: "1.0.0",
    description: "Sistema de gerenciamento de tarefas",
  },
  servers: [
    { url: "http://localhost:8000" }
  ],
  tags: [
    { name: "tasks", description: "Operações relacionadas a tarefas" },
    { name: "auth", description: "Autenticação" }
  ],
  components: {
    schemas: {
      UserLogin: {
        type: "object",
        required: ["email", "senha"],
        properties: {
          email: { type: "string" },
          senha: { type: "string" }
        }
      },
      Task: {
        type: "object",
        required: ["titulo", "categoria", "isCompleted"],
        properties: {
          id: { type: "string" },
          titulo: { type: "string" },
          categoria: { type: "string" },
          isCompleted: { type: "boolean" }
        }
      },
      CreateTask: {
        type: "object",
        required: ["titulo", "categoria"],
        properties: {
          titulo: { type: "string" },
          categoria: { type: "string" }
        }
      },
      UpdateTask: {
        type: "object",
        required: ["titulo", "categoria"],
        properties: {
          titulo: { type: "string" },
          categoria: { type: "string" }
        }
      }
    },
    securitySchemes: {        
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    }
  },
  security: [               
    { bearerAuth: [] }
  ],
  paths: {
    "/login": {
      post: {
        tags: ["auth"],
        summary: "Login do usuário",
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/UserLogin" } }
          }
        },
        responses: { "200": { description: "Token retornado com sucesso" } }
      }
    },
    "/tarefas": {
      get: {
        tags: ["tasks"],
        summary: "Lista todas as tarefas",
        security: [{ bearerAuth: [] }], 
        responses: {
          "200": { description: "Lista de tarefas" }
        }
      },
      post: {
        tags: ["tasks"],
        summary: "Cria uma nova tarefa",
        security: [{ bearerAuth: [] }], 
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/CreateTask" } }
          }
        },
        responses: { "201": { description: "Tarefa criada com sucesso" } }
      }
    },
    "/tarefas/{id}": {
      put: {
        tags: ["tasks"],
        summary: "Atualiza uma tarefa pelo ID",
        security: [{ bearerAuth: [] }], 
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: { $ref: "#/components/schemas/UpdateTask" } }
          }
        },
        responses: { "200": { description: "Tarefa atualizada com sucesso" } }
      },
      delete: {
        tags: ["tasks"],
        summary: "Deleta uma tarefa pelo ID",
        security: [{ bearerAuth: [] }], 
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } }
        ],
        responses: { "200": { description: "Tarefa deletada com sucesso" } }
      }
    }
  }
};