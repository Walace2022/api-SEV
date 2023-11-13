import {
  createService,
  deleteService,
  findAllService,
  findByIdService,
  updateService,
} from "../services/funcionario.service.js";

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

export const findAll = async (req, res) => {
  try {
    const funcionarios = await findAllService();

    if (funcionarios.length === 0) {
      return res.status(400).send({
        message: "Nenhum funcionario cadastrado.",
      });
    }

    return res.send(funcionarios);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const { nome, CPF, senha } = req.body;
    const { id } = req.params;

    if (!nome && !CPF && !senha) {
      return res.status(400).send({
        message:
          "Envie pelo menos um item para atualizar o cadastro do funcionario.",
      });
    }

    if (senha && !(String(req.funcionarioId) === String(id))) {
      return res
        .status(400)
        .send({ message: "Você não pode mudar a senha de outro funcionario." });
    }

    await updateService(id, nome, CPF, senha);

    return res.send({ message: "Funcionario atualizado com sucesso." });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

export const erase = async (req, res) => {
  const { id } = req.params;

  await deleteService(id);

  return res.send({ message: "Funcionario deletado com sucesso." });
};

export const findFuncionarioLogado = async (req, res) => {
  try {
    const id = req.funcionarioId;

    const logged = await findByIdService(id);

    res.send({ nome: logged.nome });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
