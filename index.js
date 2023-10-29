import express from "express";
//Banco de Dados
import connectDatabase from "./src/database/db.js";

//Variaveis de ambiente
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

app.listen(port, () => {
  console.log(`O servidor está rodando na porta:${port}`);
});
