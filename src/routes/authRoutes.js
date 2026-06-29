const express = require("express");

const router = express.Router();

const controller = require("../controllers/authController");

// Apenas para visualização no navegador
router.get("/login", (req, res) => {
    res.json({
        mensagem: "Endpoint de autenticação do SGHSS.",
        observacao: "Utilize o método POST para realizar o login.",
        rota: "/auth/login"
    });
});

// Login
router.post("/login", controller.login);

module.exports = router;