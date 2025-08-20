import express from 'express'; // Importing the express module
import dotenv from 'dotenv';
const app = express(); // Creating an express app

dotenv.config();

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});