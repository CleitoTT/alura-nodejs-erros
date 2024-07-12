import express from "express"
import { livrosRoutes } from "./livrosRoutes.js"
import { autoresRoutes } from "./autoresRoutes.js"

const route = (app) =>{
    app.get("/", (req,res)=> res.status(200).send("Curso de Node.Js!"))

    app.use(express.json(), livrosRoutes, autoresRoutes)
}

export default route