// app.js
// JULIA FRANSIOZI
import express from 'express';
import funcionarioRouter from './routes/funcionarioRouter.js';

const app = express();
const port = 3000;

app.use(express.json());

// Prefixo das rotas de funcionários
app.use('/funcionarios', funcionarioRouter);

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log(`Acessar http://localhost:${port}/funcionarios`);
});