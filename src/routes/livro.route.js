import { Router } from "express";
const routes = Router();

import {
  create,
  erase,
  findAll,
  update,
} from "../controllers/livro.controller.js";
import { validId } from "../middlewares/global.middleware.js";

routes.post("/", create);
routes.get("/", findAll);
routes.patch("/:id", validId, update);
routes.delete("/:id", validId, erase);

export default routes;
