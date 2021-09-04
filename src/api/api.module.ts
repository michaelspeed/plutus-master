import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication/authentication.controller';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { OrganizationModule } from './controllers/organization/organization.module';
import { CompanyModule } from './controllers/company/company.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ContextGuard } from './common/middleware/context.guard';
import { HttpExceptionFilter } from './common/filter/http-exception.filter';
import { RequestContextService } from './common/RequestContext/request-context.service';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        const url = config.get('endpoints.auth');
        return {
          baseURL: url,
        };
      },
      inject: [ConfigService],
    }),
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
    OrganizationModule,
    CompanyModule,
  ],
  controllers: [AuthenticationController],
  providers: [
    RequestContextService,
    {
      provide: APP_GUARD,
      useClass: ContextGuard,
    },
  ],
})
export class ApiModule {}
