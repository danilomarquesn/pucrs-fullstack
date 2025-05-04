// import express from "express";
const express = require('express');

const app = express();
const port = 5002;

// Rota principal que responde com "Olá mundo" | EXPRESS
app.get('/', (req, res) => {
    res.send('Olá mundo | EXPRESS');
});

app.get('/:numeroRota', (req, res) => {
    const numeroRota = req.params.numeroRota
    res.send(`Olá tester - QA - route ${numeroRota} | EXPRESS`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});