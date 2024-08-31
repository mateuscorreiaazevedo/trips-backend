import { UserModule } from '@modules/user/presentation/user.module'
import { Module } from '@nestjs/common'

@Module({
  imports: [UserModule]
})
export class AppModule {}
