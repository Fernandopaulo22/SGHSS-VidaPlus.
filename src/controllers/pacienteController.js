const database = require("../database/database");

// Listar todos os pacientes
exports.listar = (req, res) => {
    res.status(200).json(database.pacientes);
};

// Buscar paciente por ID
exports.buscarPorId = (req, res) => {
    const paciente = database.pacientes.find(
        p => p.id == req.params.id
    );

    if (!paciente) {
        return res.status(404).json({
            mensagem: "Paciente não encontrado."
        });
    }

    res.json(paciente);
};

// Cadastrar paciente
exports.cadastrar = (req, res) => {

    const novoPaciente = {
        id: Date.now(),
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email
    };

    database.pacientes.push(novoPaciente);

    res.status(201).json(novoPaciente);
};

// Atualizar paciente
exports.atualizar = (req, res) => {

    const paciente = database.pacientes.find(
        p => p.id == req.params.id
    );

    if (!paciente) {
        return res.status(404).json({
            mensagem: "Paciente não encontrado."
        });
    }

    paciente.nome = req.body.nome;
    paciente.cpf = req.body.cpf;
    paciente.telefone = req.body.telefone;
    paciente.email = req.body.email;

    res.json(paciente);
};

// Excluir paciente
exports.excluir = (req, res) => {

    const indice = database.pacientes.findIndex(
        p => p.id == req.params.id
    );

    if (indice === -1) {
        return res.status(404).json({
            mensagem: "Paciente não encontrado."
        });
    }

    database.pacientes.splice(indice, 1);

    res.json({
        mensagem: "Paciente removido com sucesso."
    });
};