const express = require("express");
const cors = require("cors");

const pacienteRoutes = require("./routes/pacienteRoutes");
const medicoRoutes = require("./routes/medicoRoutes");
const consultaRoutes = require("./routes/consultaRoutes");
const prontuarioRoutes = require("./routes/prontuarioRoutes");
const receitaRoutes = require("./routes/receitaRoutes");
const leitoRoutes = require("./routes/leitoRoutes");
const authRoutes = require("./routes/authRoutes");
const relatorioRoutes = require("./routes/relatorioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/pacientes", pacienteRoutes);
app.use("/medicos", medicoRoutes);
app.use("/consultas", consultaRoutes);
app.use("/prontuarios", prontuarioRoutes);
app.use("/receitas", receitaRoutes);
app.use("/leitos", leitoRoutes);
app.use("/auth", authRoutes);
app.use("/relatorios", relatorioRoutes);

app.get("/", (req, res) => {
    res.json({
        sistema: "SGHSS VidaPlus",
        status: "Online"
    });
});

module.exports = app;