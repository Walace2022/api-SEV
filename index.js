import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta:${port}`);
});
