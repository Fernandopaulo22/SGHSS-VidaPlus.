let consultas = [];

exports.listar = (req, res) => {
    res.status(200).json(consultas);
};

exports.buscarPorId = (req, res) => {

    const consulta = consultas.find(c => c.id == req.params.id);

    if (!consulta) {
        return res.status(404).json({
            mensagem: "Consulta não encontrada."
        });
    }

    res.json(consulta);
};

exports.cadastrar = (req, res) => {

    const novaConsulta = {
        id: Date.now(),
        paciente: req.body.paciente,
        medico: req.body.medico,
        data: req.body.data,
        horario: req.body.horario,
        status: req.body.status || "Agendada"
    };

    consultas.push(novaConsulta);

    res.status(201).json(novaConsulta);
};

exports.atualizar = (req, res) => {

    const consulta = consultas.find(c => c.id == req.params.id);

    if (!consulta) {
        return res.status(404).json({
            mensagem: "Consulta não encontrada."
        });
    }

    consulta.paciente = req.body.paciente;
    consulta.medico = req.body.medico;
    consulta.data = req.body.data;
    consulta.horario = req.body.horario;
    consulta.status = req.body.status;

    res.json(consulta);
};

exports.excluir = (req, res) => {

    consultas = consultas.filter(c => c.id != req.params.id);

    res.json({
        mensagem: "Consulta removida com sucesso."
    });

};