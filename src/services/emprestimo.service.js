import Emprestimo from "../models/Emprestimo.js";

export const createService = (body) => Emprestimo.create(body);

export const findAllService = () =>
  Emprestimo.find()
    .sort({_id:-1})
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
