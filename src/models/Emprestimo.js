import mongoose from "mongoose";

const EmprestimoSchema = mongoose.Schema({
  funcionario: {
    type: mongoose.Schema.Types.ObjectId,
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
  dataEmprestimo: { type: Date, required: true, default: new Date() },
  dataDevolucao: { type: Date },
});

const Emprestimos = mongoose.model("Emprestimo", EmprestimoSchema);

export default Emprestimos;
