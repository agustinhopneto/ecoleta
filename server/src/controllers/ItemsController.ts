import { Request, Response } from 'express';
import knex from '../database/connection';

import '../lib/env';

class ItemsController {
  async index(request: Request, response: Response): Promise<Response> {
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        name: item.title,
        image_url: `${process.env.API_URL}:${process.env.API_PORT}/uploads/${item.image}`,
      };
    });

    return response.json(serializedItems);
  }
}

export default ItemsController;
