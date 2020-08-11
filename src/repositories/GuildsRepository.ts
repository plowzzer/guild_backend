import { EntityRepository, Repository } from 'typeorm';
import Guild from '../models/Guild';

@EntityRepository(Guild)
class GuildsRepositories extends Repository<Guild> {}

export default GuildsRepositories;
