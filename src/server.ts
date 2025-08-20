import express from 'express'; // Importing the express module
import cors from 'cors';
import dotenv from 'dotenv';
import investimentoController from './controllers/investimento.controller.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger.js';
const app = express(); // Creating an express app


dotenv.config();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors());

app.post('/investment', investimentoController.criar);
app.get('/investment', investimentoController.listar);
app.put('/investment/:id', investimentoController.atualizar);
app.delete('/investment/:id', investimentoController.excluir);

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
