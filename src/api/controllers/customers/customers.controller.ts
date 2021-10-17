import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Ctx } from '../../common/decorator/request-context.decorator';
import { RequestContext } from '../../common/RequestContext/request-context';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  create(
    @Body() createCustomerDto: CreateCustomerDto,
    @Ctx() context: RequestContext,
  ) {
    return this.customersService.create(createCustomerDto, context);
  }

  @Get()
  findAll() {
    return this.customersService.findAll();
  }

  @Get('company/:id')
  findAllWithCompany(@Param('id') id: string, @Ctx() context: RequestContext) {
    return this.customersService.findAllWithCompany(context, id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(+id, updateCustomerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customersService.remove(+id);
  }
}
