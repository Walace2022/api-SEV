import {
  createService,
  deleteService,
  findAllService,
  updateService,
} from "../services/livro.service.js";

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

export const update = async (req, res) => {
  try {
    const { nome, edicao, autor, ano } = req.body;
    const { id } = req.params;

    if (!nome && !edicao && !autor && !ano) {
      return res.status(400).send({
        message: "Pelo menos um campo deve ser preenchido para atualizar",
      });
    }

    await updateService(id, nome, edicao, autor, ano);

    return res.send({ message: "Livro atualizado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const erase = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteService(id);

    return res.send({ message: "Livro deletado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
