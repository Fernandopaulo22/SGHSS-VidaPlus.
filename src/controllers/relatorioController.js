const database = require("../database/database");

exports.listar = (req, res) => {

    res.status(200).json({
        totalPacientes: database.pacientes.length,
        totalMedicos: database.medicos.length,
        totalConsultas: database.consultas.length,
        totalProntuarios: database.prontuarios.length,
        totalReceitas: database.receitas.length,
        totalLeitos: database.leitos.length
    });

};