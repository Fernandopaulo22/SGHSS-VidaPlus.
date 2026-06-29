const database = require("../database/database");

exports.listar = (req, res) => {
    res.status(200).json(database.receitas);
};

exports.cadastrar = (req, res) => {

    const receita = {
        id: Date.now(),
        paciente: req.body.paciente,
        medicamento: req.body.medicamento,
        dosagem: req.body.dosagem
    };

    database.receitas.push(receita);

    res.status(201).json(receita);
};