import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from '../../../service/helpers/prisma.service';
import { RequestContext } from '../../common/RequestContext/request-context';

@Injectable()
export class CustomersService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createCustomerDto: CreateCustomerDto, ctx: RequestContext) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    const { companyId, ...rest } = createCustomerDto;
    return this.prismaService.customer.create({
      data: {
        ...rest,
        company: {
          connect: {
            id: companyId,
          },
        },
      },
    });
  }

  findAll() {
    return `This action returns all customers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customer`;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
