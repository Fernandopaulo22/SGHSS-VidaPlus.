# SGHSS - Sistema de Gestão Hospitalar e Serviços de Saúde

## Projeto Multidisciplinar - Back-end

Sistema desenvolvido para a disciplina Projeto Multidisciplinar projeto:Desenvolvimento Back-end, simulando um Sistema de Gestão Hospitalar para a instituição fictícia VidaPlus.

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Git
- GitHub

## Arquitetura

O projeto foi desenvolvido utilizando o padrão MVC (Model-View-Controller).

Estrutura:

- Controllers
- Models
- Routes
- Middleware
- Database
- Services
- Config
- Utils

## Funcionalidades

✔ Cadastro de Pacientes

✔ Cadastro de Médicos

✔ Gerenciamento de Consultas

✔ Gerenciamento de Prontuários

✔ Emissão de Receitas

✔ Controle de Leitos

✔ Relatórios

✔ Autenticação

## Como executar

```bash
npm install
npm start
```

Servidor local:

```
http://localhost:3000
```

## Endpoints disponíveis

### Página inicial
GET /
```
http://localhost:3000/
```

### Pacientes
GET
```
http://localhost:3000/pacientes
```

### Médicos
GET
```
http://localhost:3000/medicos
```

### Consultas
GET
```
http://localhost:3000/consultas
```

### Prontuários
GET
```
http://localhost:3000/prontuarios
```

### Receitas
GET
```
http://localhost:3000/receitas
```

### Leitos
GET
```
http://localhost:3000/leitos
```

### Relatórios
GET
```
http://localhost:3000/relatorios
```

### Login
POST
```
http://localhost:3000/auth/login
```

## Autor

Fernando paulo de jesus santos 

O projeto é apenas um Prototipo.