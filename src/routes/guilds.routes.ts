import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import GuildsRepository from '../repositories/GuildsRepository';
import CreateGuildService from '../services/CreateGuildService';

const guildsRouter = Router();

guildsRouter.get('/', async (request, response) => {
  const guildsRepository = getCustomRepository(GuildsRepository);
  const guilds = await guildsRepository.find();

  return response.json(guilds);
});

guildsRouter.post('/', async (request, response) => {
  try {
    const { name, type, avatar } = request.body;

    const createGuild = new CreateGuildService();

    const guild = await createGuild.execute({
      name,
      type,
      avatar,
    });

    return response.json(guild);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default guildsRouter;
