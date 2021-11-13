import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '../../../service/helpers/prisma.service';
import { RequestContext } from '../../common/RequestContext/request-context';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProductDto: CreateProductDto, ctx: RequestContext) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    const { organization, ...rest } = createProductDto;
    return this.prismaService.products.create({
      data: {
        ...rest,
        organization: {
          connect: {
            id: organization,
          },
        },
      },
    });
  }

  findAllByOrganizations(organizationId: string, ctx: RequestContext) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    return this.prismaService.products.findMany({
      where: {
        organization: {
          id: organizationId,
        },
      },
    });
  }

  findAll(ctx: RequestContext) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    return this.prismaService.products.findMany({
      where: {
        organization: {
          licence: ctx.licence,
        },
      },
    });
  }

  findOne(id: string) {
    return this.prismaService.products.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateProductDto: UpdateProductDto, ctx: RequestContext) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    const { organization, ...rest } = updateProductDto;
    return this.prismaService.products.update({
      where: {
        id,
      },
      data: rest,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
