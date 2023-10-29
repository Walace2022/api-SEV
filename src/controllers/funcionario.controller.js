import { createService } from "../services/funcionario.service.js";

export const create = async (req, res) => {
  try {
    const { nome, CPF, senha } = req.body;

    if (!nome || !CPF || !senha) {
      return res.status(400).send({
        message: "Todos os campos precisam ser preenchidos para o cadastro.",
      });
    }

    await createService(req.body);

    res.status(201).send({ message: "Funcionario cadastrado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
