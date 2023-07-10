import { Test, TestingModule } from '@nestjs/testing';
import { RecibosController } from './recibos.controller';
import { RecibosService } from './recibos.service';

describe('RecibosController', () => {
  let controller: RecibosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecibosController],
      providers: [RecibosService],
    }).compile();

    controller = module.get<RecibosController>(RecibosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
