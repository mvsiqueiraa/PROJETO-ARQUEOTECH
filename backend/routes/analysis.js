const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Analysis = require('../models/Analysis');

// Salvar nova análise
router.post('/', auth, async (req, res) => {
    try {
        const analysis = new Analysis({
            userId: req.userId,
            imageUrl: req.body.imageUrl,
            predictions: req.body.predictions
        });

        await analysis.save();
        res.status(201).json(analysis);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao salvar análise' });
    }
});

// Buscar análises do usuário
router.get('/my', auth, async (req, res) => {
    try {
        const analyses = await Analysis.find({ userId: req.userId });
        res.json(analyses);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar análises' });
    }
});

module.exports = router;
