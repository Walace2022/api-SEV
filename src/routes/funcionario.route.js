import { Router } from "express";
const routes = Router();

import { create } from "../controllers/funcionario.controller.js";

routes.post("/", create);

export default routes;
