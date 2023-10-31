import { Router } from "express";
const routes = Router();

import {
  create,
  erase,
  findAll,
  update,
} from "../controllers/livro.controller.js";

routes.post("/", create);
routes.get("/", findAll);
routes.patch("/:id", update);
routes.delete("/:id", erase);

export default routes;
