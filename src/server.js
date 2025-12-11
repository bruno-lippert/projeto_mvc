const express = require("express");
const path = require("node:path");
const routes = require("./routes");

const app = express();

// config EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// config arquivos estaticos
app.use(express.static("public"));

// Config para ler dados da req
app.use(express.urlencoded({ extended: true }));

// rootas da aplicação
app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado na PORTA: ${PORT}`));
