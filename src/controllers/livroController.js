import livro from "../models/Livros.js"

class LivroControler {
    static async listarLivros (req, res) {
        const listaLivros = await livro.find({})
        res.status(200).json(listaLivros)
    }
}

export default LivroControler;