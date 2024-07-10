import express from "express";
import AutorController from "../controllers/autorController.js";

export const routes = express.Router();

routes.get("/livros", LivroControler.listarLivros);
routes.get("/livros/:id", LivroControler.listarLivroPorId);
routes.post("/livros", LivroControler.cadastrarLivro);
routes.put("/livros/:id", LivroControler.atualizarLivro);
routes.delete("/livros/:id", LivroControler.apagarLivroPorId);