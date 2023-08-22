const express = require("express");
const router = express.Router();
const {
    findAllUsers,
    findUserById,
    updateUser,
    deleteUserById,
} = require("../controllers/user.controller");

/**
MOSTRAR TODOS LOS USUARIOS
method: GET
url: http://localhost:3000/api/user
*/
router.get("/", findAllUsers);

/**
BUSCAR UN USUARIO POR ID
method: GET
url: http://localhost:3000/api/user/1
*/
router.get("/:id", findUserById);

/**
CREAR UN USUARIO
method: POST
url: http://localhost:3000/api/signup
body:
{
    "firstName": "Mateo",
    "lastName": "Diaz",
    "email": "mateo.diaz@correo.com",
    "password": "mateo123456"
},
{
    "firstName": "Santiago",
    "lastName": "Mejias",
    "email": "santiago.mejias@correo.com",
    "password": "santiago123456"
},
{
    "firstName": "Lucas",
    "lastName": "Rojas",
    "email": "lucas.rojas@correo.com",
    "password": "lucas123456"
},
{
    "firstName": "Facundo",
    "lastName": "Fernandez",
    "email": "facundo.fernandez@correo.com",
    "password": "facundo123456"
}

router.post("/", createUser);
*/

/**
ACTUALIZAR NOMBRE Y APELLIDO DE UN USUARIO
method: PUT
url: http://localhost:3000/api/user/1
body:
{
    "firstName": "Mateo Actualizado",
    "lastName": "Diaz Actualizado"
}
*/
router.put("/:id", updateUser);

/**
ELIMINAR USUARIO ID 4
method: DELETE
url: http://localhost:3000/api/user/4
*/
router.delete("/:id", deleteUserById);

module.exports = router;