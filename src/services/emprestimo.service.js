import Emprestimo from "../models/Emprestimo.js";

export const createService = (body) => Emprestimo.create(body);
