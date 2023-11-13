import { Router } from "express";
const routes = Router();

import {
  create,
  erase,
  findAll,
  update,
  findFuncionarioLogado,
} from "../controllers/funcionario.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validId } from "../middlewares/global.middleware.js";

routes.post("/", authMiddleware, create);
routes.get("/", authMiddleware, findAll);
routes.get("/logado", authMiddleware, findFuncionarioLogado);
routes.patch("/:id", authMiddleware, validId, update);
routes.delete("/:id", authMiddleware, validId, erase);

export default routes;
