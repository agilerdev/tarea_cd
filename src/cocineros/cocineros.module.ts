import { Module } from '@nestjs/common';
import { CocinerosService } from './cocineros.service';
import { CocinerosController } from './cocineros.controller';

@Module({
  controllers: [CocinerosController],
  providers: [CocinerosService]
})
export class CocinerosModule {}
