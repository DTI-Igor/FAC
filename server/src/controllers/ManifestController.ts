import { Request, Response } from 'express';
import db from '../database/connection';

export default class ManifestController {
    async index(request: Request, response: Response){
        const manifests = await db('manifest');
        return response.json(manifests);
    }
}