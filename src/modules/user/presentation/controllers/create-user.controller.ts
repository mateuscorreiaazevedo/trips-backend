import { Controller, Post } from '@nestjs/common'

@Controller('user')
export class CreateUserController {
  constructor() {}
  @Post()
  async createUser() {
    return 'create'
  }
}
