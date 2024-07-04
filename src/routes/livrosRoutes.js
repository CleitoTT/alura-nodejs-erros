import express from "express";
import LivroControler from "../controllers/livroController.js";

const routes = express.Router()/

routes.get("/livros", LivroControler.listarLivros);