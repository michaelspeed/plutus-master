import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ContextGuard } from '../../common/middleware/context.guard';
import { RequestContextService } from '../../common/RequestContext/request-context.service';
import { ServiceModule } from '../../service/service.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('token'),
          signOptions: { expiresIn: '60d' },
        };
      },
      inject: [ConfigService],
    }),
    ConfigModule,
    ServiceModule,
  ],
  controllers: [CompanyController],
  providers: [
    CompanyService,
    RequestContextService,
    {
      provide: APP_GUARD,
      useClass: ContextGuard,
    },
  ],
})
export class CompanyModule {}
