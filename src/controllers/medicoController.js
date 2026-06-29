const database = require("../database/database");

// Listar médicos
exports.listar = (req, res) => {
    res.status(200).json(database.medicos);
};

// Buscar médico por ID
exports.buscarPorId = (req, res) => {
    const medico = database.medicos.find(
        m => m.id == req.params.id
    );

    if (!medico) {
        return res.status(404).json({
            mensagem: "Médico não encontrado."
        });
    }

    res.json(medico);
};

// Cadastrar médico
exports.cadastrar = (req, res) => {

    const novoMedico = {
        id: Date.now(),
        nome: req.body.nome,
        crm: req.body.crm,
        especialidade: req.body.especialidade,
        telefone: req.body.telefone,
        email: req.body.email
    };

    database.medicos.push(novoMedico);

    res.status(201).json(novoMedico);
};

// Atualizar médico
exports.atualizar = (req, res) => {

    const medico = database.medicos.find(
        m => m.id == req.params.id
    );

    if (!medico) {
        return res.status(404).json({
            mensagem: "Médico não encontrado."
        });
    }

    medico.nome = req.body.nome;
    medico.crm = req.body.crm;
    medico.especialidade = req.body.especialidade;
    medico.telefone = req.body.telefone;
    medico.email = req.body.email;

    res.json(medico);
};

// Excluir médico
exports.excluir = (req, res) => {

    const indice = database.medicos.findIndex(
        m => m.id == req.params.id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Médico não encontrado."
        });
    }

    database.medicos.splice(indice, 1);

    res.json({
        mensagem: "Médico removido com sucesso."
    });
};