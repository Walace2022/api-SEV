import { Router } from "express";
const routes = Router();

import {
  create,
  erase,
  findAll,
  update,
} from "../controllers/livro.controller.js";
import { validId } from "../middlewares/global.middleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

routes.post("/", authMiddleware, create);
routes.get("/", authMiddleware, findAll);
routes.patch("/:id", authMiddleware, validId, update);
routes.delete("/:id", authMiddleware, validId, erase);

export default routes;
