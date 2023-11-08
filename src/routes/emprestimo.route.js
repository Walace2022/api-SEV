import { Router } from "express";
const routes = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { create, findAll } from "../controllers/emprestimo.controller.js";

routes.post("/", authMiddleware, create);
routes.get("/", findAll);

export default routes;
