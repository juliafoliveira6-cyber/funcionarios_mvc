// controllers/funcionariosController.js

import * as FuncionarioModel from '../models/funcionariosModel.js';

// GET - Listar todos os funcionários
export const getFuncionarios = (req, res) => {
    const funcionarios = FuncionarioModel.listarTodos();

    res.status(200).json(funcionarios);
};

// GET - Listar funcionário com maior salário
export const getMaiorSalario = (req, res) => {
    const funcionario = FuncionarioModel.obterMaiorSalario();

    if (!funcionario) {
        return res.status(404).json({
            mensagem: 'Nenhum funcionário cadastrado'
        });
    }

    res.status(200).json(funcionario);
};

// GET - Listar por departamento
export const getFuncionariosPorDepartamento = (req, res) => {
    const depto = req.params.depto.trim();

    const funcionariosDepto = FuncionarioModel.buscarPorDepartamento(depto);

    if (funcionariosDepto.length > 0) {
        res.status(200).json(funcionariosDepto);
    } else {
        res.status(404).json({
            mensagem: `Nenhum funcionário encontrado no departamento ${depto}`
        });
    }
};

// GET - Buscar funcionário por CPF
export const getFuncionarioPorCPF = (req, res) => {
    const cpf = req.params.cpf;

    const funcionario = FuncionarioModel.buscarPorCPF(cpf);

    if (funcionario) {
        res.status(200).json(funcionario);
    } else {
        res.status(404).json({
            mensagem: `Funcionário não encontrado com CPF ${cpf}`
        });
    }
};

// POST - Cadastrar novo funcionário
export const postFuncionario = (req, res) => {
    const { funcionario, cpf, depto, salario } = req.body;

    if (!funcionario || !cpf || !depto || salario === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (funcionario, cpf, depto, salario) são obrigatórios'
        });
    }

    const novoFuncionario = FuncionarioModel.criar({
        funcionario,
        cpf,
        depto,
        salario
    });

    res.status(201).json(novoFuncionario);
};

// PUT - Atualizar funcionário
export const putFuncionario = (req, res) => {
    const cpf = req.params.cpf;

    const { funcionario, depto, salario } = req.body;

    if (!funcionario || !depto || salario === undefined) {
        return res.status(400).json({
            mensagem: 'Todos os campos (funcionario, depto, salario) são obrigatórios'
        });
    }

    const funcionarioAtualizado = FuncionarioModel.atualizar(cpf, {
        funcionario,
        depto,
        salario
    });

    if (!funcionarioAtualizado) {
        return res.status(404).json({
            mensagem: `Funcionário não encontrado com CPF ${cpf}`
        });
    }

    res.status(200).json(funcionarioAtualizado);
};

// DELETE - Remover funcionário
export const deleteFuncionario = (req, res) => {
    const cpf = req.params.cpf;

    const funcionarioRemovido = FuncionarioModel.remover(cpf);

    if (!funcionarioRemovido) {
        return res.status(404).json({
            mensagem: `Funcionário não encontrado com CPF ${cpf}`
        });
    }

    res.status(200).json({
        mensagem: `Funcionário com CPF ${cpf} removido com sucesso`,
        funcionario: funcionarioRemovido
    });
};