import { PrismaClient } from '../../generated/prisma/index.js';
import type { Investimento } from '../../generated/prisma/index.js';

export type InvestimentoData = Omit<Investimento, 'id'>;

const prisma = new PrismaClient();

export class InvestimentoRepository {
    async criar(data: InvestimentoData): Promise<Investimento> {
        return prisma.investimento.create({ data });
    }

    async listar(): Promise<Investimento[]> {
        return prisma.investimento.findMany();
    }

    async atualizar(id: number, data: Partial<InvestimentoData>): Promise<Investimento | null> {
        return prisma.investimento.update({
            where: { id },
            data,
        });
    }

    async excluir(id: number): Promise<Investimento | null> {
        return prisma.investimento.delete({
            where: { id },
        });
    }
}

export default new InvestimentoRepository();