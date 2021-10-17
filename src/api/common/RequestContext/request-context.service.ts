import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { RequestContext } from './request-context';
import { Token } from './token';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RequestContextService {
  constructor(private readonly jwtService: JwtService) {}

  async fromRequest(req: Request): Promise<RequestContext> {
    try {
      const token = await this.fromRequestHeader(req);
      const decripted = await this.decryptToken(token);
      /*if (!decripted.licenseStatus) {
        throw new UnauthorizedException('Your license is not valid');
      }*/
      return new RequestContext({
        ...decripted,
      });
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async decryptToken(token: string): Promise<Token> {
    try {
      const verify = this.jwtService.verify(token);
      const decrypted: Token = this.jwtService.decode(token) as Token;
      if (!decrypted) {
        throw new UnauthorizedException('Faulty token');
      }
      return decrypted;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async fromRequestHeader(request: Request): Promise<string> {
    try {
      const token = request.get('Authorization');
      if (!token) {
        throw new UnauthorizedException();
      } else {
        return token;
      }
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
