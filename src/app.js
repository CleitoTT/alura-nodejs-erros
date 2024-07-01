import express from 'express';

const app = express();

const livros = [
    {
        id:1,
        titulo: "Como Fazer Amigos e Influenciar Pessoas"
    },
    {
        id:2,
        titulo: "Os Segredos da Mente Milionária"
    }
]

app.get("/", (req, res)=>{
    res.status(200).send("Curso de Node.js!");
});

app.get("/livros", (req, res)=>{
    res.status(200).json(livros)
});

export default app