import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiPropertyOptional()
  @IsString()
  description: string;

  @ApiPropertyOptional()
  @IsString()
  category: string;

  @ApiPropertyOptional()
  @IsBoolean()
  expiry: boolean;

  @ApiPropertyOptional()
  @IsString()
  batch_no: string;

  @ApiPropertyOptional()
  @IsString()
  HSN: string;

  @ApiPropertyOptional()
  @IsNumber()
  @Type(() => Number)
  GST: number;

  @ApiPropertyOptional()
  @IsString()
  mgf: string;

  @ApiPropertyOptional()
  @IsString()
  group: string;

  @ApiPropertyOptional()
  @IsBoolean()
  tax: boolean;

  @ApiPropertyOptional()
  @IsBoolean()
  tax_free: boolean;

  @ApiPropertyOptional()
  @IsString()
  organization: string;
}
