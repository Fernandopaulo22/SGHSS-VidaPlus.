class Receita {

    constructor(id, paciente, medico, medicamento, dosagem, observacoes) {

        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.medicamento = medicamento;
        this.dosagem = dosagem;
        this.observacoes = observacoes;

    }

}

module.exports = Receita;