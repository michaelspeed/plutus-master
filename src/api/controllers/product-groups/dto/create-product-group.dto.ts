import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductGroupDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  organizationId: string;
}
