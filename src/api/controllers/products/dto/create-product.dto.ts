import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  description: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  category: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  expiry: boolean;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  batch_no: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  HSN: string;

  @ApiPropertyOptional()
  @IsNumber({ allowNaN: true })
  @Type(() => Number)
  @IsOptional()
  GST: number;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  mgf: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  group: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  tax: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  tax_free: boolean;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  id: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  organizationId: string;
}
