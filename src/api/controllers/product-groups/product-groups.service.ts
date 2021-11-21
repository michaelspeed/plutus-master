import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateProductGroupDto } from './dto/create-product-group.dto';
import { UpdateProductGroupDto } from './dto/update-product-group.dto';
import { PrismaService } from '../../../service/helpers/prisma.service';
import { RequestContext } from '../../common/RequestContext/request-context';

@Injectable()
export class ProductGroupsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(
    createProductGroupDto: CreateProductGroupDto,
    context: RequestContext,
  ) {
    if (!context.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    return this.prismaService.producsGroups.create({
      data: {
        ...createProductGroupDto,
      },
    });
  }

  findAll(context: RequestContext, id: string) {
    if (!context.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    return this.prismaService.producsGroups.findMany({
      where: {
        organization: {
          id,
        },
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} productGroup`;
  }

  update(id: number, updateProductGroupDto: UpdateProductGroupDto) {
    return `This action updates a #${id} productGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} productGroup`;
  }
}
