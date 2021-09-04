import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { RequestContext } from '../../common/RequestContext/request-context';
import { PrismaService } from '../../service/helpers/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto, ctx: RequestContext) {
    /*return this.prismaService.organization.create({
      data: {
        ...createCompanyDto,
        licence: ctx.license,
      },
    });*/
  }

  findAll() {
    return `This action returns all company`;
  }

  findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
