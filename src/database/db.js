import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Esperando se conectar ao Banco de dados.");

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("Conectado ao Banco de Dados."))
    .catch((err) => {
      console.log(err);
    });
};

export default connectDatabase;
