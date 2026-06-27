let receitas = [];

exports.listar = (req, res) => {
    res.status(200).json(receitas);
};

exports.buscarPorId = (req, res) => {

    const receita = receitas.find(r => r.id == req.params.id);

    if (!receita) {
        return res.status(404).json({
            mensagem: "Receita não encontrada."
        });
    }

    res.json(receita);
};

exports.cadastrar = (req, res) => {

    const novaReceita = {
        id: Date.now(),
        paciente: req.body.paciente,
        medico: req.body.medico,
        medicamento: req.body.medicamento,
        dosagem: req.body.dosagem,
        observacoes: req.body.observacoes
    };

    receitas.push(novaReceita);

    res.status(201).json(novaReceita);
};

exports.atualizar = (req, res) => {

    const receita = receitas.find(r => r.id == req.params.id);

    if (!receita) {
        return res.status(404).json({
            mensagem: "Receita não encontrada."
        });
    }

    receita.paciente = req.body.paciente;
    receita.medico = req.body.medico;
    receita.medicamento = req.body.medicamento;
    receita.dosagem = req.body.dosagem;
    receita.observacoes = req.body.observacoes;

    res.json(receita);

};

exports.excluir = (req, res) => {

    receitas = receitas.filter(r => r.id != req.params.id);

    res.json({
        mensagem: "Receita removida."
    });

};