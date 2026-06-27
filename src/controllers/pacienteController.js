let pacientes = [];

exports.listar = (req, res) => {
    res.status(200).json(pacientes);
};

exports.buscarPorId = (req, res) => {
    const paciente = pacientes.find(p => p.id == req.params.id);

    if (!paciente) {
        return res.status(404).json({
            mensagem: "Paciente não encontrado."
        });
    }

    res.json(paciente);
};

exports.cadastrar = (req, res) => {

    const novoPaciente = {
        id: Date.now(),
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        email: req.body.email
    };

    pacientes.push(novoPaciente);

    res.status(201).json(novoPaciente);

};

exports.atualizar = (req, res) => {

    const paciente = pacientes.find(p => p.id == req.params.id);

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

exports.excluir = (req, res) => {

    pacientes = pacientes.filter(p => p.id != req.params.id);

    res.json({
        mensagem: "Paciente removido com sucesso."
    });

};