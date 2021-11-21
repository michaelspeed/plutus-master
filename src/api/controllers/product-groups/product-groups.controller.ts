import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductGroupsService } from './product-groups.service';
import { CreateProductGroupDto } from './dto/create-product-group.dto';
import { UpdateProductGroupDto } from './dto/update-product-group.dto';
import { Ctx } from '../../common/decorator/request-context.decorator';
import { RequestContext } from '../../common/RequestContext/request-context';

@Controller('product-groups')
export class ProductGroupsController {
  constructor(private readonly productGroupsService: ProductGroupsService) {}

  @Post()
  create(
    @Body() createProductGroupDto: CreateProductGroupDto,
    @Ctx() context: RequestContext,
  ) {
    return this.productGroupsService.create(createProductGroupDto, context);
  }

  @Get(':id')
  findAll(@Param('id') id: string, @Ctx() context: RequestContext) {
    return this.productGroupsService.findAll(context, id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productGroupsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductGroupDto: UpdateProductGroupDto,
  ) {
    return this.productGroupsService.update(+id, updateProductGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productGroupsService.remove(+id);
  }
}
