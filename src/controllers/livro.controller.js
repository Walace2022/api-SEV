import { createService, findAllService } from "../services/livro.service.js";

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

export const findAll = async (req, res) => {
  try {
    const livros = await findAllService();

    if (livros.length === 0) {
      return res
        .status(400)
        .send({ message: "Nenhum livro cadastrado no momento." });
    }

    return res.send(livros);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
