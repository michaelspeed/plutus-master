import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { RequestContext } from '../../common/RequestContext/request-context';
import { Ctx } from '../../common/decorator/request-context.decorator';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  async create(
    @Body() createOrganizationDto: CreateOrganizationDto,
    @Ctx() context: RequestContext,
  ) {
    return this.organizationService.create(createOrganizationDto, context);
  }

  @Get()
  async findAll(@Ctx() context: RequestContext) {
    try {
      return this.organizationService.findAll(context);
    } catch (e) {
      return e;
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.organizationService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationService.update(+id, updateOrganizationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.organizationService.remove(+id);
  }
}
