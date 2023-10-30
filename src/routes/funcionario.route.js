import { Router } from "express";
const routes = Router();

import {
  create,
  findAll,
  update,
} from "../controllers/funcionario.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

routes.post("/", create);
routes.get("/", findAll);
routes.patch("/:id", authMiddleware, update);

export default routes;
