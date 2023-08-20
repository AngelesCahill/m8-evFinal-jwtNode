const express = require("express");
const router = express.Router();
const {
  createBootcamp,
  addUserToBootcamp,
  findBootcampById,
  findAllBootcamps,
} = require("../controllers/bootcamp.controller");
const { verifyToken } = require("../middleware");

/**
MOSTRAR TODOS LOS BOOTCAMPS
method: GET
url: http://localhost:3000/api/project
*/
router.get("/", findAllBootcamps);

// Aplicamos seguridad de aquí en adelante
router.use("/", verifyToken);

/**
CREAR UN BOOTCAMP
method: POST
url: http://localhost:3000/api/project
body:
{
    "name": "Proyecto A",
    "description": "Proyecto de prueba"
}
*/
router.post("/", createBootcamp);

/**
AGREGAR UN USUARIO A UN BOOTCAMP
method: POST
url: http://localhost:3000/api/project/adduser
body:
{
    "projectId":1,
    "userId":1
}
*/
router.post("/adduser", addUserToBootcamp);

/**
method: GET
url: http://localhost:3000/api/project/1
*/
router.get("/:id", findBootcampById);

module.exports = router;
