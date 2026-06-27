exports.login = (req, res) => {

    const { email, senha } = req.body;

    if (email === "admin@vidaplus.com" && senha === "123456") {

        return res.json({
            mensagem: "Login realizado com sucesso.",
            usuario: {
                nome: "Administrador",
                perfil: "ADMIN"
            }
        });

    }

    if (email === "medico@vidaplus.com" && senha === "123456") {

        return res.json({
            mensagem: "Login realizado com sucesso.",
            usuario: {
                nome: "Dr. Carlos",
                perfil: "MEDICO"
            }
        });

    }

    return res.status(401).json({
        mensagem: "E-mail ou senha inválidos."
    });

};