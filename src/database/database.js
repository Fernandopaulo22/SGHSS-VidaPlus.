const database = {
  pacientes: [
    {
      id: 1,
      nome: "Maria Silva",
      cpf: "123.456.789-00",
      telefone: "(11) 99999-1111",
      email: "maria@email.com"
    },
    {
      id: 2,
      nome: "João Pereira",
      cpf: "987.654.321-00",
      telefone: "(11) 98888-2222",
      email: "joao@email.com"
    }
  ],

  medicos: [
    {
      id: 1,
      nome: "Dr. Carlos Mendes",
      crm: "CRM12345",
      especialidade: "Cardiologia",
      telefone: "(11) 97777-3333",
      email: "carlos@vidaplus.com"
    },
    {
      id: 2,
      nome: "Dra. Ana Souza",
      crm: "CRM67890",
      especialidade: "Pediatria",
      telefone: "(11) 96666-4444",
      email: "ana@vidaplus.com"
    }
  ],

  consultas: [
    {
      id: 1,
      paciente: "Maria Silva",
      medico: "Dr. Carlos Mendes",
      data: "30/06/2026",
      horario: "09:00",
      status: "Agendada"
    }
  ],

  prontuarios: [
    {
      id: 1,
      paciente: "Maria Silva",
      diagnostico: "Hipertensão leve",
      observacoes: "Paciente em acompanhamento."
    }
  ],

  receitas: [
    {
      id: 1,
      paciente: "Maria Silva",
      medicamento: "Losartana 50mg",
      dosagem: "1 comprimido ao dia"
    }
  ],

  leitos: [
    {
      id: 1,
      numero: "101",
      setor: "UTI",
      status: "Ocupado"
    },
    {
      id: 2,
      numero: "205",
      setor: "Clínica Médica",
      status: "Disponível"
    }
  ]
};

module.exports = database;