import {
  createService,
  devolucaoService,
  findAllService,
} from "../services/emprestimo.service.js";
import { findByCPF } from "../services/usuario.service.js";

export const create = async (req, res) => {
  try {
    const { livro, CPF } = req.body;
    const funcionario = req.funcionarioId;

    if (!funcionario || !livro || !CPF) {
      return res.status(400).send({
        message: "Todos os campos precisam ser preenchidos para o cadastro.",
      });
    }

    const user = await findByCPF(CPF);

    if (!user) {
      res.status(400).send({ message: "CPF do usuario invalido." });
    }

    const usuario = user._id;

    await createService({ funcionario, livro, usuario });

    res.status(201).send({ message: "Emprestimo realizado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const emprestimos = await findAllService();

    if (emprestimos.length === 0) {
      return res.status(400).send({
        message: "Nenhum funcionario cadastrado.",
      });
    }

    return res.send(emprestimos);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const devolucao = async (req, res) => {
  try {
    const id = req.params.id;

    await devolucaoService(id);

    res.send({ message: "Devolução realizado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
