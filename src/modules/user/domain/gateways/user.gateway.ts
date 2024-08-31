import { User } from '../entities/user.entity'

export abstract class UserGateway {
  abstract create(user: User): Promise<User>
}
