const database = require("../database/database");

exports.listar = (req, res) => {
    res.status(200).json(database.leitos);
};

exports.cadastrar = (req, res) => {

    const leito = {
        id: Date.now(),
        numero: req.body.numero,
        setor: req.body.setor,
        status: req.body.status
    };

    database.leitos.push(leito);

    res.status(201).json(leito);
};