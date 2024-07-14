import { autor } from "../models/Autor.js";
import livro from "../models/Livros.js"

class LivroController {
    static listarLivros = async (req, res) => {
        try {
          const livrosResultado = await livro.find()
            .populate("autor")
            .exec();
    
          res.status(200).json(livrosResultado);
        } catch (erro) {
          res.status(500).json({ message: "Erro interno no servidor", erro });
        }
      };

    static async listarLivroPorId (req, res) {
        try{
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id)
            res.status(200).json(livroEncontrado)
        } catch(erro){
            res.status(500).json( { message:`${erro.message} - falha na requisição do livro` } )
        }
    };

    static async cadastrarLivro (req,res) {

        const novoLivro = req.body;

        try{
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc} };
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json( { message: "criado com sucesso", livro: livroCriado } );
        } catch(erro){
            res.status(500).json( { message: `${erro.message} - falha ao cadastrar livro` } )
        }
    };

    static async atualizarLivro (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body)
            res.status(200).json( { message:"Livro atualizado com sucesso!" } )
        } catch(erro){
            res.status(500).json( { message:`${erro.message} - falha na atualização do livro` } )
        }
    };

    static async apagarLivroPorId (req, res) {
        try{
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json( { message: "Livro excluido com sucesso!" } )
        } catch(erro){
            res.status(500).json( { message:`${erro.message} - falha ao apagar livro` } )
        }
    }

    static async listarLivrosPorEditora (req, res){
        const editora = req.query.editora;

        try{
            const livrosPorEditora = await livro.find({editora: editora});
            res.status(200).json({ livrosPorEditora });
        }catch(erro){
            res.status(500).json( { message:`${erro.message} - falha na pesquisa` } )
        }
    }
}

export default LivroController;