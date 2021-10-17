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
    const { id, ...rest } = createCustomerDto;
    const newObject: any = {};
    const keys = Object.keys(rest);
    for (const key of keys) {
      if (createCustomerDto[key] === null) {
        newObject[key] = undefined;
      } else {
        newObject[key] = createCustomerDto[key];
      }
    }
    return this.prismaService.customer.create({
      data: {
        ...newObject,
        company: {
          connect: {
            id: id,
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
