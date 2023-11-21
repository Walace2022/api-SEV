import mongoose, { Schema } from "mongoose";

const EmprestimoSchema = mongoose.Schema({
  funcionario: {
    type: Schema.Types.ObjectId,
    ref: "Funcionario",
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  livro: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Livros",
    required: true,
  },
  dataEmprestimo: { type: String, required: true, default: (new Date()).toLocaleDateString() },
  dataDevolucao: { type: String },
});

const Emprestimo = mongoose.model("Emprestimo", EmprestimoSchema);

export default Emprestimo;
