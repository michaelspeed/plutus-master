import { JsonCompatible } from '../types/common-types';
import { User } from './user';

export const REQUEST_CONTEXT_KEY = 'plutus_context';

export type SerializeRequestContext = {
  employee: boolean;
  licenceId: string;
  licenseStatus: boolean;
  user: JsonCompatible<User>;
};

export class RequestContext {
  private readonly _licenseId?: string;
  private readonly _licenseStatus: boolean;
  private readonly _user: User;
  private readonly _employee?: boolean;

  constructor(options: {
    licenseId: string;
    licenseStatus: boolean;
    user: User;
    employee: boolean;
  }) {
    const { licenseId, licenseStatus, user, employee } = options;
    this._user = user;
    this._licenseId = licenseId;
    this._licenseStatus = licenseStatus;
    this._employee = employee;
  }

  static deserialize(ctxObject: SerializeRequestContext): RequestContext {
    return new RequestContext({
      employee: ctxObject.employee,
      licenseId: ctxObject.licenceId,
      licenseStatus: ctxObject.licenseStatus,
      user: ctxObject.user,
    });
  }

  serialize(): SerializeRequestContext {
    return JSON.parse(JSON.stringify(this));
  }

  public get user(): User {
    return this._user;
  }

  public get license(): string {
    return this._licenseId;
  }

  public get licenseStatus(): boolean {
    return this._licenseStatus;
  }

  public get employee(): boolean {
    return this._employee;
  }
}
