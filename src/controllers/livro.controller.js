import { createService } from "../services/livro.service.js";

export const create = async (req, res) => {
  try {
    const { nome, edicao, autor, ano } = req.body;
    if (!nome || !edicao || !autor || !ano) {
      return res.status(400).send({
        message: "Todos os campos devem ser preenchidos para o cadastro.",
      });
    }

    await createService(req.body);

    return res.send({ message: "Livro cadastrado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
