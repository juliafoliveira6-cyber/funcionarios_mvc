// models/funcionariosModel.js

import { funcionarios } from '../funcionarios_mono.js';

// Listar todos os funcionários
export const listarTodos = () => {
    return funcionarios;
};

// Buscar funcionário por departamento
export const buscarPorDepartamento = (depto) => {
    return funcionarios.filter(
        f => f.depto.toLowerCase() === depto.toLowerCase()
    );
};

// Buscar funcionário por CPF
export const buscarPorCPF = (cpf) => {
    return funcionarios.find(
        f => f.cpf === cpf
    );
};

// Listar funcionário com maior salário
export const obterMaiorSalario = () => {
    if (funcionarios.length === 0) {
        return null;
    }

    let maior = funcionarios[0];

    for (let f of funcionarios) {
        if (f.salario > maior.salario) {
            maior = f;
        }
    }

    return maior;
};

// Cadastrar funcionário
export const criar = ({ funcionario, cpf, depto, salario }) => {
    const novoFuncionario = {
        funcionario,
        cpf,
        depto,
        salario
    };

    funcionarios.push(novoFuncionario);

    return novoFuncionario;
};

// Atualizar funcionário pelo CPF
export const atualizar = (cpf, { funcionario, depto, salario }) => {
    const index = funcionarios.findIndex(
        f => f.cpf === cpf
    );

    if (index === -1) {
        return null;
    }

    funcionarios[index] = {
        cpf,
        funcionario,
        depto,
        salario
    };

    return funcionarios[index];
};

// Remover funcionário pelo CPF
export const remover = (cpf) => {
    const index = funcionarios.findIndex(
        f => f.cpf === cpf
    );

    if (index === -1) {
        return null;
    }

    const [funcionarioRemovido] = funcionarios.splice(index, 1);

    return funcionarioRemovido;
};