const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar ao MongoDB com mais detalhes de erro
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('MongoDB conectado com sucesso');
    })
    .catch(err => {
        console.error('Erro detalhado MongoDB:', {
            message: err.message,
            code: err.code,
            name: err.name,
            stack: err.stack
        });
        process.exit(1);
    });

// Rotas básicas
app.get('/', (req, res) => {
    res.json({ message: 'API funcionando!' });
});

// Rotas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/analysis', require('./routes/analysis')); // Movido para cima

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
