import { Router } from "express";
const routes = Router();

import { create, findAll } from "../controllers/usuario.controller.js";

routes.post("/",create);
routes.get("/",findAll);

export default routes;