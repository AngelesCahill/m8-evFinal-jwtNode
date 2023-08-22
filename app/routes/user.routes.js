const express = require("express");
const router = express.Router();
const {
    findAllUsers,
    findUserById,
    updateUser,
    deleteUserById,
} = require("../controllers/user.controller");


router.get("/", findAllUsers);

router.get("/:id", findUserById);

router.put("/:id", updateUser);

/**
ELIMINAR USUARIO ID 4
method: DELETE
url: http://localhost:3000/api/user/4
*/
router.delete("/:id", deleteUserById);

module.exports = router;