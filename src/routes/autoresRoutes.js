import express from "express";
import AutorController from "../controllers/autorController.js";

export const autoresRoutes = express.Router();

autoresRoutes.get("/autores", AutorController.listarAutores);
autoresRoutes.get("/autores/:id", AutorController.listarAutorPorId);
autoresRoutes.post("/autores", AutorController.cadastrarAutor);
autoresRoutes.put("/autores/:id", AutorController.atualizarAutor);
autoresRoutes.delete("/autores/:id", AutorController.apagarAutorPorId);