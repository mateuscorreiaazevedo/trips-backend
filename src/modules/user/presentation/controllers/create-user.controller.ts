import { Controller, Post } from '@nestjs/common'
import { SnowflakeGeneratorService } from '@shared/utils/helpers/snow-flake.service'

@Controller('user')
export class CreateUserController {
  constructor(private id: SnowflakeGeneratorService) {}
  @Post()
  async createUser() {
    return this.id.generateID()
  }
}
