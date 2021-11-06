import { Test, TestingModule } from '@nestjs/testing';
import { CreditorsController } from './creditors.controller';
import { CreditorsService } from './creditors.service';

describe('CreditorsController', () => {
  let controller: CreditorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditorsController],
      providers: [CreditorsService],
    }).compile();

    controller = module.get<CreditorsController>(CreditorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
