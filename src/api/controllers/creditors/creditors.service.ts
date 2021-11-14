import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCreditorDto } from './dto/create-creditor.dto';
import { UpdateCreditorDto } from './dto/update-creditor.dto';
import { RequestContext } from '../../common/RequestContext/request-context';
import { PrismaService } from '../../../service/helpers/prisma.service';

@Injectable()
export class CreditorsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCreditorDto: CreateCreditorDto, ctx: RequestContext) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    const { id, ...rest } = createCreditorDto;
    const newObject: any = {};
    const keys = Object.keys(rest);
    for (const key of keys) {
      if (createCreditorDto[key] === null) {
        newObject[key] = undefined;
      } else {
        newObject[key] = createCreditorDto[key];
        if (key === 'drug_license_validity') {
          newObject[key] = new Date(createCreditorDto[key]);
        }
      }
    }
    return this.prismaService.creditor.create({
      data: {
        ...newObject,
        company: {
          connect: {
            id,
          },
        },
      },
    });
  }

  async findAllWithCompany(ctx: RequestContext, id: string) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    const creditors = await this.prismaService.creditor.findMany({
      where: {
        company: {
          some: {
            id: id,
          },
        },
      },
    });
    return creditors;
  }

  findAll() {
    return `This action returns all creditors`;
  }

  findOne(id: string, ctx: RequestContext) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    return this.prismaService.creditor.findUnique({
      where: {
        id,
      },
    });
  }

  update(
    id: string,
    updateCreditorDto: UpdateCreditorDto,
    ctx: RequestContext,
  ) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    const { id: companyId, ...rest } = updateCreditorDto;
    const newObject: any = {};
    const keys = Object.keys(rest);
    for (const key of keys) {
      if (updateCreditorDto[key] === null) {
        newObject[key] = undefined;
      } else {
        newObject[key] = updateCreditorDto[key];
        if (key === 'drug_license_validity') {
          newObject[key] = new Date(updateCreditorDto[key]);
        }
      }
    }
    return this.prismaService.creditor.update({
      where: {
        id,
      },
      data: {
        ...newObject,
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} creditor`;
  }
}
