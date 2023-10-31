import { createService } from "../services/usuario.service.js";

export const create= async(req,res)=>{
    try{
        const{nome,CPF,endereco,telefone}= req.body;

        if(!nome || !CPF || !endereco || !telefone){
            return res.status(400).send({message:"Todos os campos devem ser preenchidos para o cadastro."});
        }

        await createService(req.body);

        return res.send({message:"Usuario cadastrado com sucesso."});

    }catch (err) {
    return res.status(500).send({ message: err.message });
  }
}