import { Router } from "express";
const routes = Router();

import { create } from "../controllers/livro.controller.js";

routes.post("/", create);

export default routes;
