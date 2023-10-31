import { Router } from "express";
const routes = Router();

import { create, findAll, update } from "../controllers/livro.controller.js";

routes.post("/", create);
routes.get("/", findAll);
routes.patch("/:id", update);

export default routes;
