class Consulta {

    constructor(id, paciente, medico, data, horario, status) {

        this.id = id;
        this.paciente = paciente;
        this.medico = medico;
        this.data = data;
        this.horario = horario;
        this.status = status;

    }

}

module.exports = Consulta;