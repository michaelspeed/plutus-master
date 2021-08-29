import { Module } from '@nestjs/common';
import { PrismaService } from './helpers/prisma.service';

@Module({
  providers: [PrismaService],
})
export class ServiceModule {}
