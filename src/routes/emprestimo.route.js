import { Router } from "express";
const routes = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  create,
  devolucao,
  findAll,
} from "../controllers/emprestimo.controller.js";
import { validId } from "../middlewares/global.middleware.js";

routes.post("/", authMiddleware, create);
routes.get("/", findAll);
routes.patch("/devolucao/:id", validId, devolucao);

export default routes;
