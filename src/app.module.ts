import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocinerosModule } from './cocineros/cocineros.module';

@Module({
  imports: [CocinerosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
