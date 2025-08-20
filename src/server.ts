import express from 'express'; // Importing the express module
import dotenv from 'dotenv';
import investimentoController from './controllers/investimento.controller.js';
const app = express(); // Creating an express app

dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use(express.json());

app.post('/investments', investimentoController.criar);
app.get('/investments', investimentoController.listar);
app.put('/investments/:id', investimentoController.atualizar);
app.delete('/investments/:id', investimentoController.excluir);