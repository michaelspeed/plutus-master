import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { RequestContext } from '../../common/RequestContext/request-context';
import { PrismaService } from '../../service/helpers/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createOrganizationDto: CreateOrganizationDto, ctx: RequestContext) {
    return this.prismaService.organization.create({
      data: {
        ...createOrganizationDto,
        licence: ctx.license,
      },
    });
  }

  findAll(ctx: RequestContext) {
    return this.prismaService.organization.findMany({
      where: {
        licence: ctx.license,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
