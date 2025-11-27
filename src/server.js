const express = require("express");
const path = require("node:path");
const router = require("./routes");

const app = express();

// Config EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Config arquivos estáticos
app.use(express.static("public"));

// Config para ler dados da req
app.use(express.urlencoded({ extended: true }));

// rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor Iniciado"));
