import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GstStatus } from '@prisma/client';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString, Max, Min
} from "class-validator";
import { Type } from "class-transformer";

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  contact_person: string;

  @ApiProperty()
  @IsString()
  id: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  shipping_address: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  bill_address: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  state: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  pin_code: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({ allowNaN: true })
  @Type(() => Number)
  @Min(0)
  @Max(1000000000000)
  phone: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  drug_license: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  drug_license_validity: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  PAN: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({ allowNaN: true })
  creditlimit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({ allowNaN: true })
  creditdays: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber({ allowNaN: true })
  stop_billings: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  discount: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  istatetax: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  state_tax: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  l_type: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  area_name: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  headquaters: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  MSR: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  DSM: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  transporter: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  banker: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  document_through: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  GSTIN: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  gst_status: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(GstStatus)
  gststatus: GstStatus;
}
