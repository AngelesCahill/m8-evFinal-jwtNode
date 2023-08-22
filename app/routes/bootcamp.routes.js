const express = require("express");
const router = express.Router();
const {
  createBootcamp,
  addUserToBootcamp,
  findBootcampById,
  findAllBootcamps,
} = require("../controllers/bootcamp.controller");
const { verifyToken } = require("../middleware");


router.get("/", findAllBootcamps);

// Aplicamos seguridad de aquí en adelante
router.use("/", verifyToken);

router.post("/", createBootcamp);

router.post("/adduser", addUserToBootcamp);

/**
method: GET
url: http://localhost:3000/api/bootcamp/1
*/
router.get("/:id", findBootcampById);

module.exports = router;
