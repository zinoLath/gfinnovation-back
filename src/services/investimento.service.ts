import type { Request, Response } from 'express';
import type { Investimento } from '../../generated/prisma/index.js';
import InvestimentoRepository from '../repositories/investimento.repository.js';
import type { InvestimentoData } from '../repositories/investimento.repository.js';

type RequestInfo = Omit<Investimento, 'id'> & {
    data: string; // Assuming 'data' is a string in the request body
};

class InvestimentoService {
    async criar(data: RequestInfo) {
        var dateparts = data.data.split('-');
        var mydate = new Date(Number(dateparts[0]), Number(dateparts[1]) - 1, Number(dateparts[2]));
        const investimentoData: InvestimentoData = { ...data, data: mydate };
        return InvestimentoRepository.criar(investimentoData);
    }

    async listar() {
        return InvestimentoRepository.listar();
    }
    
    async atualizar(id: number, data: Partial<RequestInfo>) {
        if (data.data && typeof data.data === 'string') {
            var dateparts = data.data.split('-');
            var mydate = new Date(Number(dateparts[0]), Number(dateparts[1]) - 1, Number(dateparts[2]));
            const investimentoData: Partial<InvestimentoData> = { ...data, data: mydate };
            return InvestimentoRepository.atualizar(id, investimentoData);
        }
        else {
            return InvestimentoRepository.atualizar(id, data); // If no date is provided, just update the other fields
        }
    }

    async excluir(id: number) {
        return InvestimentoRepository.excluir(id);
    }
}

export default new InvestimentoService();