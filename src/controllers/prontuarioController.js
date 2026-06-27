let prontuarios = [];

exports.listar = (req, res) => {
    res.status(200).json(prontuarios);
};

exports.buscarPorId = (req, res) => {

    const prontuario = prontuarios.find(p => p.id == req.params.id);

    if (!prontuario) {
        return res.status(404).json({
            mensagem: "Prontuário não encontrado."
        });
    }

    res.json(prontuario);
};

exports.cadastrar = (req, res) => {

    const novoProntuario = {
        id: Date.now(),
        paciente: req.body.paciente,
        medico: req.body.medico,
        diagnostico: req.body.diagnostico,
        observacoes: req.body.observacoes,
        data: req.body.data
    };

    prontuarios.push(novoProntuario);

    res.status(201).json(novoProntuario);
};

exports.atualizar = (req, res) => {

    const prontuario = prontuarios.find(p => p.id == req.params.id);

    if (!prontuario) {
        return res.status(404).json({
            mensagem: "Prontuário não encontrado."
        });
    }

    prontuario.paciente = req.body.paciente;
    prontuario.medico = req.body.medico;
    prontuario.diagnostico = req.body.diagnostico;
    prontuario.observacoes = req.body.observacoes;
    prontuario.data = req.body.data;

    res.json(prontuario);

};

exports.excluir = (req, res) => {

    prontuarios = prontuarios.filter(p => p.id != req.params.id);

    res.json({
        mensagem: "Prontuário removido."
    });

};