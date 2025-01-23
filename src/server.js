import express from "express";
import "./config/dbConfig.js";
import routes from "./routes.js"

const app = express();
app.use(express.json());
app.use(routes)

app.listen(3000, () => {
    console.log("O servidor está rodando na porta: http://localhost:3000 ");
})