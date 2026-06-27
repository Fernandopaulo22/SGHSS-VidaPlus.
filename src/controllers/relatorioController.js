exports.resumo = (req, res) => {

    res.json({

        hospital: "VidaPlus",

        relatorio: {

            pacientes: "Cadastro disponível",

            medicos: "Cadastro disponível",

            consultas: "Agendamento disponível",

            prontuarios: "Prontuários disponíveis",

            receitas: "Receitas disponíveis",

            leitos: "Controle disponível"

        }

    });

};