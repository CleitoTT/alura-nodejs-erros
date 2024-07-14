import { autor } from "../models/Autor.js"

class AutorController {
    static async listarAutores (req, res, next) {
        try{
            const listaAutores = await autor.find({})
            res.status(200).json(listaAutores)
        } catch(erro){
          next(erro)
        }
    };

    static async listarAutorPorId (req, res, next) {
        try{
            const id = req.params.id;
            const autorResultado = await autor.findById(id)

            if(autorResultado !== null){
              res.status(200).json(autorResultado)
            }else{
              res.status(404).json( { message:"Id do autor não localizado" } )
            }

        } catch(erro){
          next(erro)
        }
    };

    static cadastrarAutor = async (req, res, next) => {
        try {
          let autor = new autor(req.body);
    
          const autorResultado = await autor.save();
    
          res.status(201).send(autorResultado.toJSON());
        } catch (erro) {
          next(erro)
        }
      };

      static atualizarAutor = async (req, res, next) => {
        try {
          const id = req.params.id;
    
          await autor.findByIdAndUpdate(id, {$set: req.body});
    
          res.status(200).send({message: "Autor atualizado com sucesso"});
        } catch (erro) {
          next(erro)
        }
      };

      static excluirAutor = async (req, res, next) => {
        try {
          const id = req.params.id;
    
          await autor.findByIdAndDelete(id);
    
          res.status(200).send({message: "Autor removido com sucesso"});
        } catch (erro) {
          next(erro)
        }
      };
}

export default AutorController;