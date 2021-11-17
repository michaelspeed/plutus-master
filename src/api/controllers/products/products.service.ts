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
    const { organizationId, id, GST, ...rest } = createProductDto;

    let cgst = 0;

    if (GST && !isNaN(GST)) {
      cgst = GST / 2;
    }

    const newObject: any = {};
    const keys = Object.keys(rest);
    for (const key of keys) {
      if (createProductDto[key] === null) {
        newObject[key] = undefined;
      } else {
        newObject[key] = createProductDto[key];
      }
    }
    return this.prismaService.products.create({
      data: {
        ...newObject,
        CGST: cgst,
        SGST: cgst,
        organization: {
          connect: {
            id: organizationId,
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
    const { organizationId, ...rest } = updateProductDto;
    const newObject: any = {};
    const keys = Object.keys(rest);
    for (const key of keys) {
      if (updateProductDto[key] === null) {
        newObject[key] = undefined;
      } else {
        newObject[key] = updateProductDto[key];
      }
    }
    return this.prismaService.products.update({
      where: {
        id,
      },
      data: newObject,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }

  findBySearch(search: string, ctx: RequestContext, id: string) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    return this.prismaService.products.findMany({
      where: {
        name: {
          startsWith: search,
        },
        organization: {
          id,
        },
      },
    });
  }

  connectProductToCreditor(
    productId: string,
    creditorId: string,
    ctx: RequestContext,
  ) {
    if (!ctx.licenseStatus) {
      throw new UnauthorizedException('You are not authorized');
    }
    return this.prismaService.products.update({
      where: {
        id: productId,
      },
      data: {
        creditor: {
          connect: {
            id: creditorId,
          },
        },
      },
    });
  }
}
