import type { Request, Response } from 'express';
import InvestimentoService from '../services/investimento.service.js';

class InvestimentoController {
    async criar(req: Request, res: Response) {
        try {
            const investimento = await InvestimentoService.criar(req.body);
            res.status(201).json(investimento);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(400).json({ error: message });
        }
    }

    async listar(req: Request, res: Response) {
        try {
            const investimentos = await InvestimentoService.listar();
            res.status(200).json(investimentos);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    }

    async atualizar(req: Request, res: Response) {
        try {
            const id = req.params.id;
            const investimentoAtualizado = await InvestimentoService.atualizar(Number(id), req.body);
            res.status(200).json(investimentoAtualizado);
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(400).json({ error: message });
        }
    }

    async excluir(req: Request, res: Response) {
        try {
            const id = req.params.id;
            await InvestimentoService.excluir(Number(id));
            res.status(204).send();
        } catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            res.status(500).json({ error: message });
        }
    }
}

export default new InvestimentoController();