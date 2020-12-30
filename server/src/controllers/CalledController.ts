import { Request, Response } from 'express';
import db from '../database/connection';

export default class CalledController {
    async index(request: Request, response: Response){
        const calleds = await db('called');

        return response.json(calleds);
    }

    async create(request: Request, response: Response) {
        const trx = await db.transaction();
        const {
            title,
            descriptions,
            created_at,
            id_categories,
        } = request.body;

        try {
            await trx('called').insert({
                title,
                descriptions,
                created_at,
                id_categories,
            })

            await trx.commit();

            return response.status(200).send();
        } catch (err) {
            await trx.rollback();
            return response.status(400).json({
                error: 'Error inesperado'
            })
        }
    }
}