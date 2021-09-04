import { Module } from '@nestjs/common';
import { PrismaService } from './helpers/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class ServiceModule {}
