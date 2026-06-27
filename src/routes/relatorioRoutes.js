const express = require("express");

const router = express.Router();

const controller = require("../controllers/relatorioController");

router.get("/", controller.resumo);

module.exports = router;