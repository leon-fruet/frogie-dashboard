import { User } from '../typeorm/entities/User';

export type Done = (err: Error, user: User) => void;
