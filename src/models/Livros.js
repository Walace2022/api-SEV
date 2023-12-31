import mongoose from "mongoose";

const LivrosSchema = mongoose.Schema({
  nome: { type: String, required: true },
  edicao: { type: String, required: true },
  autor: { type: String, required: true },
  ano: { type: Number, required: true },
});

const Livros = mongoose.model("Livros", LivrosSchema);

export default Livros;
