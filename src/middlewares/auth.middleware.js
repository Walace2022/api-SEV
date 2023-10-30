import jwt from "jsonwebtoken";
import { findByIdService } from "../services/funcionario.service.js";

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.sendStatus(401);
    }

    const parts = authorization.split(" ");
    if (parts.length !== 2) {
      return res.sendStatus(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }

    jwt.verify(token, process.env.SECRET, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token Invalido." });
      }

      const funcionario = await findByIdService(decoded.id);

      if (!funcionario) {
        return res.status(401).send({ message: "Token Invalido." });
      }

      req.funcionarioId = funcionario._id;
      return next();
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
