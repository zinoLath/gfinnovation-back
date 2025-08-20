export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Gerenciamento de Investimentos API",
    version: "1.0.0",
    description: "API para gerenciamento de investimentos",
  },
  servers: [
    {
      url: "http://localhost:3001",
      description: "Servidor de desenvolvimento",
    },
  ],
  paths: {
    "/investment": {
      get: {
        summary: "Listar todos os investimentos",
        tags: ["Investimentos"],
        responses: {
          "200": {
            description: "Lista de investimentos",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Investimento",
                  },
                },
              },
            },
          },
        },
      },
      post: {
        summary: "Criar um novo investimento",
        tags: ["Investimentos"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/InvestimentoInput",
              },
            },
          },
        },
        responses: {
          "201": {
            description: "Investimento criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Investimento",
                },
              },
            },
          },
          "400": {
            description: "Dados inválidos",
          },
        },
      },
    },
    "/investment/{id}": {
      put: {
        summary: "Atualizar um investimento",
        tags: ["Investimentos"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/InvestimentoInput",
              },
            },
          },
        },
        responses: {
          "200": {
            description: "Investimento atualizado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Investimento",
                },
              },
            },
          },
          "400": {
            description: "Dados inválidos",
          },
          "404": {
            description: "Investimento não encontrado",
          },
        },
      },
      delete: {
        summary: "Excluir um investimento",
        tags: ["Investimentos"],
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          "204": {
            description: "Investimento excluído com sucesso",
          },
          "404": {
            description: "Investimento não encontrado",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Investimento: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "ID único do investimento",
          },
          nome: {
            type: "string",
            description: "Nome do investimento",
          },
          valor: {
            type: "number",
            format: "decimal",
            description: "Valor do investimento",
          },
          tipo: {
            type: "string",
            enum: ["ACAO", "FUNDO", "TITULO"],
            description: "Tipo do investimento",
          },
          data: {
            type: "string",
            format: "date-time",
            description: "Data do investimento em formato ISO-8601",
          },
        },
        required: ["id", "nome", "valor", "tipo", "data"],
      },
      InvestimentoInput: {
        type: "object",
        properties: {
          nome: {
            type: "string",
            description: "Nome do investimento",
          },
          valor: {
            type: "number",
            format: "decimal",
            description: "Valor do investimento",
          },
          tipo: {
            type: "string",
            enum: ["ACAO", "FUNDO", "TITULO"],
            description: "Tipo do investimento",
          },
          data: {
            type: "string",
            format: "date-time",
            description: "Data do investimento em formato ISO-8601",
          },
        },
        required: ["nome", "valor", "tipo", "data"],
      },
    },
  },
};

export default swaggerDocument;