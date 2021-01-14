import { Request, Response } from 'express';
import db from '../database/connection';

export default class SetorController {
    async index(request: Request, response: Response){
        const setores = await db('setor');
        return response.json(setores);
    }
}