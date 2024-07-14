import mongoose from "mongoose";
import { autor } from "../models/Autor.js"

class AutorController {
    static async listarAutores (req, res) {
        try{
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        } catch(erro){
            res.status(500).json( { message:`${erro.message} - falha na requisição` } )
        }
    };

    static async listarAutorPorId (req, res) {
        try{
            const id = req.params.id;
            const autorResultado = await autor.findById(id)

            if(autorResultado !== null){
              res.status(200).json(autorResultado)
            }else{
              res.status(404).json( { message:"Id do autor não localizado" } )
            }

        } catch(erro){
          if(erro instanceof mongoose.Error.CastError){
            res.status(400).send( { message: "Um ou mais dados fornecidos estão incorretos" } )
          }else{
            res.status(500).json( { message:`Erro interno do servidor - ${erro.message} ` } )
          }

        }
    };

    static cadastrarAutor = async (req, res) => {
        try {
          let autor = new autor(req.body);
    
          const autorResultado = await autor.save();
    
          res.status(201).send(autorResultado.toJSON());
        } catch (erro) {
          res.status(500).send({message: `${erro.message} - falha ao cadastrar Autor.`});
        }
      };

      static atualizarAutor = async (req, res) => {
        try {
          const id = req.params.id;
    
          await autor.findByIdAndUpdate(id, {$set: req.body});
    
          res.status(200).send({message: "Autor atualizado com sucesso"});
        } catch (erro) {
          res.status(500).send({message: erro.message});
        }
      };

      static excluirAutor = async (req, res) => {
        try {
          const id = req.params.id;
    
          await autor.findByIdAndDelete(id);
    
          res.status(200).send({message: "Autor removido com sucesso"});
        } catch (erro) {
          res.status(500).send({message: erro.message});
        }
      };
}

export default AutorController;