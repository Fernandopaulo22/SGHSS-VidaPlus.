class Prontuario {

    constructor(id, paciente, medico, diagnostico, observacoes, data) {

        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.diagnostico = diagnostico;
        this.observacoes = observacoes;
        this.data = data;

    }

}

module.exports = Prontuario;