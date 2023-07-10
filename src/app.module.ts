import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CocinerosModule } from './cocineros/cocineros.module';
import { RecetasModule } from './recetas/recetas.module';
import { PlatoModule } from './plato/plato.module';
import { RecibosModule } from './recibos/recibos.module';

@Module({
  imports: [CocinerosModule, RecetasModule, PlatoModule, RecibosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
