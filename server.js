const express = require("express");
const app = express();
require("dotenv").config();
const userRoutes = require("./app/routes/user.routes");
// const projectRoutes = require("./app/routes/bootcamp.routes");
const {
    User
} = require("./app/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const util = require("util");
const sign = util.promisify(jwt.sign);
const {
    verifySingUp,
    verifyToken
} = require("./app/middleware");
const cors = require("cors");

const PORT = process.env.PORT;

// Creamos la variable de configuración para CORS
var corsOpt = {
    origin: "*", // Se debe reemplazar el * por el dominio de nuestro front
    optionsSuccessStatus: 200,
};

app.use("/api/user", userRoutes);
// app.use("/api/bootcamp", bootcamptRoutes);



app.listen(PORT, () => console.log(`Iniciando en puerto ${PORT}`));