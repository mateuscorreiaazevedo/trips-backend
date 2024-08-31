import { NestFactory } from '@nestjs/core'
import { AppModule } from '@shared/app/app.module'
import env from '@shared/utils/configs/env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(env.PORT)
  console.log(`🚀 Server is running on port ${env.PORT}`)
}
bootstrap()
