const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = router;

// Rota de registro
router.post('/register', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Verificar se usuário já existe
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Criar novo usuário
        user = new User({
            name,
            email,
            password: await bcrypt.hash(password, 10)
        });

        await user.save();

        res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});

// Rota de login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verificar se usuário existe
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        // Verificar senha
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Credenciais inválidas' });
        }

        // Criar token JWT
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // Retornar token e nome do usuário
        res.json({ 
            token,
            name: user.name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro no servidor' });
    }
});
