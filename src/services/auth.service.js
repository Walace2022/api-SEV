import Funcionario from "../models/Funcionarios.js";
import jwt from "jsonwebtoken";

export const loginService = (CPF) => {
  return Funcionario.findOne({ CPF: CPF }).select("+senha");
};

export const generateToken = (id) => {
  return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: 86400 });
};
