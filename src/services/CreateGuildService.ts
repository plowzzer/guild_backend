import { getCustomRepository } from 'typeorm';
import Guild from '../models/Guild';
import GuildsRepository from '../repositories/GuildsRepository';

interface Request {
  name: string;
  type: string;
  avatar: string;
}

class CreateGuildService {
  public async execute({ name, type, avatar }: Request): Promise<Guild> {
    const guildsRepository = getCustomRepository(GuildsRepository);

    const guild = guildsRepository.create({
      name,
      type,
      avatar,
    });

    await guildsRepository.save(guild);

    return guild;
  }
}

export default CreateGuildService;
