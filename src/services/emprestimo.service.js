import Emprestimo from "../models/Emprestimo.js";

export const createService = (body) => Emprestimo.create(body);

export const findAllService = () =>
  Emprestimo.find()
    .populate("funcionario")
    .populate("usuario")
    .populate("livro");
