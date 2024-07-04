import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import livro from './models/Livros.js';

const conexao = await conectaNaDataBase();

conexao.on("error", (erro)=>{
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso!!");
});

const app = express();
app.use(express.json())

app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node.js!");
});

app.get("/livros", (req, res)=>{
    const listaLivros = livro.find({})
    res.status(200).json(listaLivros)
});

app.get("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])
})

app.post("/livros", (req, res)=>{
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
});

app.put("/livros/:id", (req,res)=>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros);
});

app.delete("/livros/:id", (req, res)=>{
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app