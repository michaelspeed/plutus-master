import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiPropertyOptional()
  @IsString()
  gst: string;

  @ApiPropertyOptional()
  @IsString()
  state: string;

  @ApiProperty()
  @IsNumber()
  zip: number;

  @ApiProperty()
  @IsNumber()
  phone: number;
}
