import Emprestimo from "../models/Emprestimo.js";

export const createService = (body) => Emprestimo.create(body);

export const findAllService = () =>
  Emprestimo.find()
    .populate("funcionario")
    .populate("usuario")
    .populate("livro");

export const devolucaoService = (id) =>
  Emprestimo.findOneAndUpdate(
    { _id: id },
    { dataDevolucao: (new Date()).toLocaleDateString() },
    {
      includeResultMetadata: true,
    }
  );

export const deleteService = (id) => Emprestimo.findOneAndDelete({ _id: id });
