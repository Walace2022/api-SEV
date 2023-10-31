import { Router } from "express";
const routes = Router();

import { create } from "../controllers/usuario.controller.js";

routes.post("/",create)

export default routes;