import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreditorsService } from './creditors.service';
import { CreateCreditorDto } from './dto/create-creditor.dto';
import { UpdateCreditorDto } from './dto/update-creditor.dto';
import { Ctx } from '../../common/decorator/request-context.decorator';
import { RequestContext } from '../../common/RequestContext/request-context';

@Controller('creditors')
export class CreditorsController {
  constructor(private readonly creditorsService: CreditorsService) {}

  @Post()
  create(
    @Body() createCreditorDto: CreateCreditorDto,
    @Ctx() context: RequestContext,
  ) {
    return this.creditorsService.create(createCreditorDto, context);
  }

  @Get()
  findAll() {
    return this.creditorsService.findAll();
  }

  @Get('company/:id')
  findAllWithCompany(@Param('id') id: string, @Ctx() context: RequestContext) {
    return this.creditorsService.findAllWithCompany(context, id);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Ctx() context: RequestContext) {
    return this.creditorsService.findOne(id, context);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCreditorDto: UpdateCreditorDto,
    @Ctx() context: RequestContext,
  ) {
    return this.creditorsService.update(id, updateCreditorDto, context);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.creditorsService.remove(+id);
  }
}
