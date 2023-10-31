import Usuario from "../models/Usuarios.js";

export const createService = (body)=>Usuario.create(body);

export const findAllService = ()=>Usuario.find();

export const updateService = (id,nome,CPF,endereco,telefone)=> Usuario.findOneAndUppdate({_id:id},{nome,CPF,endereco,telefone},{includeResultMetadata: true,});

export const deleteService =(id)=> Usuario.findOneAndDelete({_id:id});