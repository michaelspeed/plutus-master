import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
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

  @Get('/organization/:id')
  findAllByOrganizations(
    @Param('id') id: string,
    @Ctx() context: RequestContext,
  ) {
    return this.productsService.findAllByOrganizations(id, context);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }

  @Get('/search/:search/:id')
  findBySearch(
    @Param('search') search: string,
    @Param('id') id: string,
    @Ctx() context: RequestContext,
  ) {
    return this.productsService.findBySearch(search, context, id);
  }

  @Put('/connect/:productId/:creditorId')
  connect(
    @Param('productId') productId: string,
    @Param('creditorId') creditorId: string,
    @Ctx() context: RequestContext,
  ) {
    return this.productsService.connectProductToCreditor(
      productId,
      creditorId,
      context,
    );
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @Ctx() context: RequestContext,
  ) {
    return this.productsService.update(id, updateProductDto, context);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
