import Livro from "../models/Livros.js";

export const createService = (body) => Livro.create(body);

export const findAllService = () => Livro.find();

export const updateService = (id, nome, edicao, autor, ano) =>
  Livro.findOneAndUpdate(
    { _id: id },
    { nome, edicao, autor, ano },
    { includeResultMetadata: true }
  );

export const deleteService = (id) => Livro.findOneAndDelete({ _id: id });
