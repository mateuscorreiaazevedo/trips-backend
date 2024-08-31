import { Module, Type } from '@nestjs/common'
import { PrismaService } from '@shared/libs/prisma.service'
import { SnowflakeGeneratorService } from '@shared/utils/helpers/snow-flake.service'
import userControllers from './controllers'

const _userControllers: Type<any>[] = Object.values(userControllers)

@Module({
  controllers: [..._userControllers],
  providers: [PrismaService, SnowflakeGeneratorService]
})
export class UserModule {}
