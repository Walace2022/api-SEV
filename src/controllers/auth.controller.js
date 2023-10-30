import { loginService, generateToken } from "../services/auth.service.js";
import bcrypt from "bcrypt";

export const login = async (req, res) => {
  const { CPF, senha } = req.body;

  try {
    const funcionario = await loginService(CPF);
    if (!funcionario) {
      return res.status(404).send({ message: "Usuario ou senha invalidos." });
    }

    const senhaIsValid = await bcrypt.compare(senha, funcionario.senha);
    if (!senhaIsValid) {
      return res.status(404).send({ message: "Usuario ou senha invalidos." });
    }

    const token = generateToken(funcionario._id);

    res.send({ token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
