import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './service/service.module';
import { ApiModule } from './api/api.module';
import { CompanyModule } from './resource/company/company.module';
import { ConfigModule } from '@nestjs/config';
import { OrganizationModule } from './resource/organization/organization.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ServiceModule,
    ApiModule,
    CompanyModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    OrganizationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
