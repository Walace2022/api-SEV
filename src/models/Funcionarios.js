import mongoose from "mongoose";

const FuncionarioSchema = mongoose.Schema({
  nome: { type: String, required: true },
  CPF: { type: String, required: true, unique: true },
  senha: { type: String, required: true, select: false },
});

const Funcionario = mongoose.model("Funcionario", FuncionarioSchema);

export default Funcionario;
