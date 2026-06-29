const database = require("../database/database");

exports.listar = (req, res) => {
    res.status(200).json(database.prontuarios);
};

exports.cadastrar = (req, res) => {

    const prontuario = {
        id: Date.now(),
        paciente: req.body.paciente,
        diagnostico: req.body.diagnostico,
        observacoes: req.body.observacoes
    };

    database.prontuarios.push(prontuario);

    res.status(201).json(prontuario);
};