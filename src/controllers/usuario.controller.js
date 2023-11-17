import {
  createService,
  deleteService,
  findAllService,
  updateService,
} from "../services/usuario.service.js";

export const create = async (req, res) => {
  try {
    const { nome, CPF, endereco, telefone } = req.body;

    if (!nome || !CPF || !endereco || !telefone) {
      return res.status(400).send({
        message: "Todos os campos devem ser preenchidos para o cadastro.",
      });
    }

    await createService(req.body);

    return res.send({ message: "Usuario cadastrado com sucesso." });
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      return res.status(500).send({ message: "CPF já Cadastrado" });
    } else {
      return res.status(500).send({ message: "Erro no Cadastro" });
    }
  }
};

export const findAll = async (req, res) => {
  try {
    const usuarios = await findAllService();

    if (usuarios.length === 0) {
      return res
        .status(400)
        .send({ message: "Nenhum usuario cadastrado no momento." });
    }

    res.send(usuarios);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const { nome, CPF, endereco, telefone } = req.body;
    const { id } = req.params;

    if (!nome && !CPF && !endereco && !telefone) {
      return res.status(400).send({
        message:
          "Pelo menos um campo deve ser prenchido para atualizar o cadastro.",
      });
    }

    await updateService(id, nome, CPF, endereco, telefone);

    return res.send({ message: "Usuario atualizado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const erase = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteService(id);

    return res.send({ message: "Apagado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
