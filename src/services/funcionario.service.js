import Funcionario from "../models/Funcionarios.js";
import bcrypt from "bcrypt";

export const createService = (body) => Funcionario.create(body);

export const findAllService = () => Funcionario.find();

export const findByIdService = (id) => Funcionario.findById(id);

export const updateService = async (id, nome, CPF, senha) => {
  const novaSenha = await bcrypt.hash(senha, 10);
  return Funcionario.findOneAndUpdate(
    { _id: id },
    {
      nome,
      CPF,
      senha: novaSenha,
    },
    {
      includeResultMetadata: true,
    }
  );
};
