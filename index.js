import express from "express";
//Banco de Dados
import connectDatabase from "./src/database/db.js";

//Rotas
import funcionarioRoute from "./src/routes/funcionario.route.js";
import authRoute from "./src/routes/auth.route.js";

//Variaveis de ambiente
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/funcionario", funcionarioRoute);
app.use("/login", authRoute);

app.listen(port, () => {
  console.log(`O servidor está rodando na porta:${port}`);
});
