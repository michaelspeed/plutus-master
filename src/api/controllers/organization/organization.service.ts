import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { RequestContext } from '../../common/RequestContext/request-context';
import { PrismaService } from '../../../service/helpers/prisma.service';

@Injectable()
export class OrganizationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    createOrganizationDto: CreateOrganizationDto,
    ctx: RequestContext,
  ) {
    return this.prismaService.organization.create({
      data: {
        ...createOrganizationDto,
        licence: ctx.licence,
      },
    });
  }

  async findAll(ctx: RequestContext) {
    return this.prismaService.organization.findMany({
      where: {
        licence: ctx.licence,
      },
    });
  }

  async findOne(id: number) {
    return `This action returns a #${id} organization`;
  }

  async update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return `This action updates a #${id} organization`;
  }

  async remove(id: number) {
    return `This action removes a #${id} organization`;
  }
}
