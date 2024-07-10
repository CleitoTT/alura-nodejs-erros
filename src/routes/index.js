import express from "express"
import { routes } from "./livrosRoutes.js"

const route = (app) =>{
    app.get("/", (req,res)=> res.status(200).send("Curso de Node.Js!"))

    app.use(express.json(), routes)
}

export default route