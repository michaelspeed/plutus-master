import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServiceModule } from '../../service/service.module';
import { RequestContextService } from '../../common/RequestContext/request-context.service';
import { APP_GUARD } from '@nestjs/core';
import { ContextGuard } from '../../common/middleware/context.guard';

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
  controllers: [OrganizationController],
  providers: [
    OrganizationService,
    RequestContextService,
    {
      provide: APP_GUARD,
      useClass: ContextGuard,
    },
  ],
})
export class OrganizationModule {}
