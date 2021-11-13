import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Ctx } from '../../common/decorator/request-context.decorator';
import { RequestContext } from '../../common/RequestContext/request-context';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(
    @Body() createProductDto: CreateProductDto,
    @Ctx() context: RequestContext,
  ) {
    return this.productsService.create(createProductDto, context);
  }

  @Get()
  findAll(@Ctx() context: RequestContext) {
    return this.productsService.findAll(context);
  }

  @Get(':id')
  findAllByOrganizations(@Param('id') id: string, @Ctx() context: RequestContext) {
    return this.productsService.findAllByOrganizations(id, context);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @Ctx() context: RequestContext,) {
    return this.productsService.update(id, updateProductDto, context);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
