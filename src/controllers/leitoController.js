let leitos = [];

exports.listar = (req, res) => {
    res.status(200).json(leitos);
};

exports.buscarPorId = (req, res) => {

    const leito = leitos.find(l => l.id == req.params.id);

    if (!leito) {
        return res.status(404).json({
            mensagem: "Leito não encontrado."
        });
    }

    res.json(leito);
};

exports.cadastrar = (req, res) => {

    const novoLeito = {
        id: Date.now(),
        numero: req.body.numero,
        setor: req.body.setor,
        status: req.body.status || "Disponível"
    };

    leitos.push(novoLeito);

    res.status(201).json(novoLeito);
};

exports.atualizar = (req, res) => {

    const leito = leitos.find(l => l.id == req.params.id);

    if (!leito) {
        return res.status(404).json({
            mensagem: "Leito não encontrado."
        });
    }

    leito.numero = req.body.numero;
    leito.setor = req.body.setor;
    leito.status = req.body.status;

    res.json(leito);

};

exports.excluir = (req, res) => {

    leitos = leitos.filter(l => l.id != req.params.id);

    res.json({
        mensagem: "Leito removido."
    });

};