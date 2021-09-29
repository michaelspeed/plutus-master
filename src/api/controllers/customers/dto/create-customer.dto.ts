import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { GstStatus } from '@prisma/client';
import {
  IsBoolean,
  IsDate, IsEnum,
  IsNumber,
  IsOptional,
  IsString
} from "class-validator";

export class CreateCustomerDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  contact: string;

  @ApiProperty()
  @IsString()
  companyId: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  saddress: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  baddress: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  state: string;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  zip: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  phone: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  druglicenseno: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsDate()
  drugvalidity: Date;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  pan: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  creditlimit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  creditDays: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  stopBilling: number;

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
  @IsString()
  area: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  headq: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  msr: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  dsm: string;

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
  documenthrough: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  gstin: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsEnum(GstStatus)
  gststatus: GstStatus;
}
