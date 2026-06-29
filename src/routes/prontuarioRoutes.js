const express = require("express");

const router = express.Router();

const controller = require("../controllers/prontuarioController");

// Listar prontuários
router.get("/", controller.listar);

// Cadastrar prontuário
router.post("/", controller.cadastrar);

module.exports = router;