import { Module, Type } from '@nestjs/common'
import { PrismaService } from '@shared/libs/prisma.service'
import userControllers from './controllers'

const _userControllers: Type<any>[] = Object.values(userControllers)

@Module({
  controllers: [..._userControllers],
  providers: [PrismaService]
})
export class UserModule {}
