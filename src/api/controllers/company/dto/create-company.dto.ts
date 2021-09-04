import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiPropertyOptional()
  gst: string;

  @ApiPropertyOptional()
  state: string;

  @ApiProperty()
  zip: number;

  @ApiProperty()
  phone: number;
}
