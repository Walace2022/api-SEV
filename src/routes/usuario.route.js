import { Router } from "express";
const routes = Router();

import { create, findAll, update } from "../controllers/usuario.controller.js";
import { validId } from "../middlewares/global.middleware.js";

routes.post("/",create);
routes.get("/",findAll);
routes.patch("/:id",validId,update);

export default routes;