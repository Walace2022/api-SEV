import Funcionario from "../models/Funcionarios.js";

export const createService = (body) => Funcionario.create(body);
