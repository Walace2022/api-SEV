import mongoose from "mongoose";
import bcrypt from "bcrypt";

const FuncionarioSchema = mongoose.Schema({
  nome: { type: String, required: true },
  CPF: { type: String, required: true, unique: true },
  senha: { type: String, required: true, select: false },
});

FuncionarioSchema.pre("save", async function (next) {
  this.senha = await bcrypt.hash(this.senha, 10);
  next();
});

const Funcionario = mongoose.model("Funcionario", FuncionarioSchema);

export default Funcionario;
