import { Test, TestingModule } from '@nestjs/testing';
import { CocinerosController } from './cocineros.controller';
import { CocinerosService } from './cocineros.service';

describe('CocinerosController', () => {
  let controller: CocinerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CocinerosController],
      providers: [CocinerosService],
    }).compile();

    controller = module.get<CocinerosController>(CocinerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
