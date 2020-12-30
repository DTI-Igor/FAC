import { Request, Response } from 'express';
import db from '../database/connection';

export default class CategoriesController {
    async index(request: Request, response: Response){
        const categories = await db('categories');

        return response.json(categories);
    }
    async create(request: Request, response: Response) {
        const trx = await db.transaction();
        const {
            descriptions,
        } = request.body;

        try {
            await trx('categories').insert(
                {
                    descriptions
                }
            )

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
