import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from '../../common/DTO/authentication/Login.dto';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Controller('authentication')
export class AuthenticationController {
  constructor(
    private readonly httpService: HttpService,
    private readonly jwtService: JwtService,
  ) {}

  @Post('login')
  async getLogin(@Body() loginBody: LoginDto) {
    try {
      const $response = await this.httpService.post('/authentication/login', {
        email: loginBody.email,
        password: loginBody.password,
      });
      const response = await firstValueFrom($response);
      const tokenObject = AuthenticationController.createLicenseObject(
        response.data,
      );
      const token = await this.jwtService.signAsync(tokenObject);
      return {
        user: response.data,
        token,
      };
    } catch (e) {
      console.log(e);
    }
  }

  private static createLicenseObject(object) {
    let employee = false;
    let licenceId;
    let licenseStatus = false;
    if (object.licenses_licenses_employeeLicenseIdTousers.length > 0) {
      employee = true;
      licenceId = object.licenses_licenses_employeeLicenseIdTousers[0].id;
    } else if (object.licenses_licenses_ownerTousers.length > 0) {
      employee = false;
      licenceId = object.licenses_licenses_ownerTousers[0].id;
    } else {
      licenseStatus = true;
    }
    return {
      employee,
      licenceId,
      licenseStatus,
      user: object,
    };
  }
}
