import mongoose from "mongoose";

const UsuariosSchema = mongoose.Schema({
  nome: { type: String, required: true },
  CPF: { type: String, required: true,unique:true },
  endereco: { type: String, required: true },
  telefone: { type: Number, required: true },
});

const Usuario = mongoose.model("Usuario", UsuariosSchema);

export default Usuario;