import { Router } from "express";
const routes = Router();

import { authMiddleware } from "../middlewares/auth.middleware.js";
import { create } from "../controllers/emprestimo.controller.js";

routes.post("/", authMiddleware, create);

export default routes;
