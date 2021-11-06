import { Module } from '@nestjs/common';
import { CreditorsService } from './creditors.service';
import { CreditorsController } from './creditors.controller';
import { ConfigModule } from '@nestjs/config';
import { ServiceModule } from '../../../service/service.module';

@Module({
  imports: [ConfigModule, ServiceModule],
  controllers: [CreditorsController],
  providers: [CreditorsService],
})
export class CreditorsModule {}
