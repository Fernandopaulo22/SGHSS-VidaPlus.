let medicos = [];

exports.listar = (req, res) => {
    res.status(200).json(medicos);
};

exports.buscarPorId = (req, res) => {
    const medico = medicos.find(m => m.id == req.params.id);

    if (!medico) {
        return res.status(404).json({
            mensagem: "Médico não encontrado."
        });
    }

    res.json(medico);
};

exports.cadastrar = (req, res) => {

    const novoMedico = {
        id: Date.now(),
        nome: req.body.nome,
        crm: req.body.crm,
        especialidade: req.body.especialidade,
        telefone: req.body.telefone,
        email: req.body.email
    };

    medicos.push(novoMedico);

    res.status(201).json(novoMedico);
};

exports.atualizar = (req, res) => {

    const medico = medicos.find(m => m.id == req.params.id);

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

exports.excluir = (req, res) => {

    medicos = medicos.filter(m => m.id != req.params.id);

    res.json({
        mensagem: "Médico removido com sucesso."
    });
};