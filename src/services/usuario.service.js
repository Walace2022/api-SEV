import Usuario from "../models/Usuarios.js";

export const createService = (body)=>Usuario.create(body);

export const findAllService = ()=>Usuario.find();