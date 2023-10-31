import Livro from "../models/Livros.js";

export const createService = (body) => Livro.create(body);
