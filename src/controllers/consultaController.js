const database = require("../database/database");

// Listar consultas
exports.listar = (req, res) => {
    res.status(200).json(database.consultas);
};

// Buscar consulta
exports.buscarPorId = (req, res) => {
    const consulta = database.consultas.find(
        c => c.id == req.params.id
    );

    if (!consulta) {
        return res.status(404).json({
            mensagem: "Consulta não encontrada."
        });
    }

    res.json(consulta);
};

// Cadastrar consulta
exports.cadastrar = (req, res) => {

    const novaConsulta = {
        id: Date.now(),
        paciente: req.body.paciente,
        medico: req.body.medico,
        data: req.body.data,
        horario: req.body.horario,
        status: "Agendada"
    };

    database.consultas.push(novaConsulta);

    res.status(201).json(novaConsulta);
};

// Atualizar consulta
exports.atualizar = (req, res) => {

    const consulta = database.consultas.find(
        c => c.id == req.params.id
    );

    if (!consulta) {
        return res.status(404).json({
            mensagem: "Consulta não encontrada."
        });
    }

    consulta.paciente = req.body.paciente;
    consulta.medico = req.body.medico;
    consulta.data = req.body.data;
    consulta.horario = req.body.horario;

    res.json(consulta);
};

// Excluir consulta
exports.excluir = (req, res) => {

    const indice = database.consultas.findIndex(
        c => c.id == req.params.id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Consulta não encontrada."
        });
    }

    database.consultas.splice(indice, 1);

    res.json({
        mensagem: "Consulta cancelada com sucesso."
    });
};