import { Router } from "express";
const routes = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  create,
  devolucao,
  erase,
  findAll,
} from "../controllers/emprestimo.controller.js";
import { validId } from "../middlewares/global.middleware.js";

routes.post("/", authMiddleware, create);
routes.get("/", authMiddleware, findAll);
routes.patch("/devolucao/:id", authMiddleware, validId, devolucao);
routes.delete("/:id", authMiddleware, validId, erase);

export default routes;
