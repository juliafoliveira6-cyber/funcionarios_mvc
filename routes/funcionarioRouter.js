// routes/funcionarioRouter.js

import express from 'express';

import {
    getFuncionarios,
    getMaiorSalario,
    getFuncionariosPorDepartamento,
    getFuncionarioPorCPF,
    postFuncionario,
    putFuncionario,
    deleteFuncionario
} from '../controllers/funcionariosController.js';

const router = express.Router();

// GET - Listar todos
router.get('/', getFuncionarios);

// GET - Listar maior salário
router.get('/maior-salario', getMaiorSalario);

// GET - Listar por departamento
router.get('/depto/:depto', getFuncionariosPorDepartamento);

// GET - Buscar por CPF
router.get('/:cpf', getFuncionarioPorCPF);

// POST - Cadastrar
router.post('/', postFuncionario);

// PUT - Atualizar
router.put('/:cpf', putFuncionario);

// DELETE - Remover
router.delete('/:cpf', deleteFuncionario);

export default router;