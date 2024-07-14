import express from 'express';
import conectaNaDataBase from './config/dbConnect.js';
import route from './routes/index.js';
import controleDeErros from './middlewares/controleDeErros.js';

const conexao = await conectaNaDataBase();

conexao.on("error", (erro)=>{
    console.error("erro de conexao", erro);
});

conexao.once("open", ()=>{
    console.log("Conexão com o banco feita com sucesso!!");
});

const app = express();
route(app)

app.use(controleDeErros);

export default app