import type { Request, Response } from 'express';
import type { Investimento } from '../../generated/prisma/index.js';
import InvestimentoRepository from '../repositories/investimento.repository.js';
import type { InvestimentoData } from '../repositories/investimento.repository.js';


class InvestimentoService {
    async criar(data: InvestimentoData) {
        return InvestimentoRepository.criar(data);
    }

    async listar() {
        return InvestimentoRepository.listar();
    }

    async atualizar(id: number, data: Partial<InvestimentoData>) {
        return InvestimentoRepository.atualizar(id, data);
    }

    async excluir(id: number) {
        return InvestimentoRepository.excluir(id);
    }
}

export default new InvestimentoService();