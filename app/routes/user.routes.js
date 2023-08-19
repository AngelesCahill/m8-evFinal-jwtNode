const express = require("express");
const router = express.Router();
const {
  findAllUsers,
  findUserById,
  updateUser,
  deleteUserById,
} = require("../controllers/user.controller");

/**
method: GET
url: http://localhost:3000/api/user
*/
router.get("/", findAllUsers);

/**
method: GET
url: http://localhost:3000/api/user/1
*/
router.get("/:id", findUserById);

/**
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
method: DELETE
url: http://localhost:3000/api/user/1
*/
router.delete("/:id", deleteUserById);

module.exports = router;
