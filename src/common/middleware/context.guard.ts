import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { parseContext } from '../RequestContext/parseContext';
import { ConfigService } from '@nestjs/config';
import { RequestContextService } from '../RequestContext/request-context.service';
import { REQUEST_CONTEXT_KEY } from '../RequestContext/request-context';

@Injectable()
export class ContextGuard implements CanActivate {
  constructor(
    private readonly configService: ConfigService,
    private readonly requestContextService: RequestContextService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { req } = parseContext(context);
    const restExclusions = this.configService.get('exclusions.rest');
    if (restExclusions.includes(req.route.path)) {
      return true;
    }

    try {
      const requestContext = await this.requestContextService.fromRequest(req);
      (req as any)[REQUEST_CONTEXT_KEY] = requestContext;
      return true;
    } catch (e) {
      throw e;
    }
    return undefined;
  }
}
