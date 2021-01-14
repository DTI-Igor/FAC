import {Request, Response} from 'express';
import db from '../database/connection';

export default class CalledController {
    async index(request: Request, response: Response) {
        const Knex = require('knex');
        const calleds = await db('called').select('called.id', 'called.title', 'called.descriptions', 'called.created_at', 'called.reasonmanifest', 'called.funcionario', 'called.evaluation', 'called.produto', 'called.datacomprada', 'called.localcompra', 'called.loteproduto', 'called.nomecliente', Knex.raw('(SELECT setor.descriptions FROM setor WHERE called.id_setor = setor.id) as descriptionSetor'), Knex.raw('(SELECT manifest.descriptions FROM manifest WHERE called.id_manifest = manifest.id) as descriptionManifest'), Knex.raw('(SELECT categories.descriptions FROM categories WHERE called.id_categories = categories.id) as descriptionCategories')).orderBy('called.evaluation', 'DESC');
        const setores = await db('setor');

        // console.log(setores);
        return response.json(calleds);
        // return response.json({calleds, setores});
    }

    async create(request: Request, response: Response) {
        const trx = await db.transaction();

        const {
            title,
            descriptions,
            created_at,
            funcionario,
            evaluation,
            produto,
            datacomprada,
            localcompra,
            loteproduto,
            nomecliente,
            id_categories,
            id_manifest,
            setor
        } = request.body;

        console.log(request.body);

        try {
            await trx('called').insert({
                title,
                descriptions,
                created_at,
                funcionario,
                evaluation,
                produto,
                datacomprada,
                localcompra,
                loteproduto,
                nomecliente,
                id_categories,
                id_manifest,
                id_setor: setor
            })

            await trx.commit();

            return response.status(200).send();

        } catch (err) {
            await trx.rollback();
            console.log(err)

            return response.status(400).json({
                error: 'Error inesperado'
            })
        }
    }

    async edit(request: Request, response: Response) {
        const trx = await db.transaction();

        const {
            codigoManifest
        } = request.body;

        // console.log(request.body);

        const called = await db('called').where('called.id', '=', codigoManifest);

        if (called[0].evaluation == 'null') {
            try {
                await trx('called').update({
                    evaluation: 1
                }).where('called.id', '=', codigoManifest)
                await trx.commit();

                return response.status(200).send();
            } catch (err) {
                await trx.rollback();
                console.log(err)

                return response.status(400).json({
                    error: 'Error inesperado'
                })
            }
        } else {
            try {
                await trx('called').update({
                    evaluation: called[0].evaluation + 1
                }).where('called.id', '=', codigoManifest)
                await trx.commit();

                return response.status(200).send();
            } catch (err) {
                await trx.rollback();
                console.log(err)

                return response.status(400).json({
                    error: 'Error inesperado'
                })
            }
        }
    }
}
