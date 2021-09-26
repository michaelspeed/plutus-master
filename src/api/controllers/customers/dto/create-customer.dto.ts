import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  contact: string;

  @ApiProperty()
  @IsString()
  companyId: string;

  @ApiPropertyOptional()
  @IsString()
  address1: string;

  @ApiPropertyOptional()
  @IsString()
  address2: string;

  @ApiPropertyOptional()
  @IsString()
  state: string;

  @ApiPropertyOptional()
  @IsNumber()
  zip: number;

  @ApiPropertyOptional()
  @IsNumber()
  phone: number;

  @ApiPropertyOptional()
  @IsString()
  dealerno: string;

  @ApiPropertyOptional()
  @IsNumber()
  discount: number;

  @ApiPropertyOptional()
  @IsBoolean()
  istatetax: boolean;

  @ApiPropertyOptional()
  @IsString()
  area: string;

  @ApiPropertyOptional()
  @IsString()
  code: string;
}
