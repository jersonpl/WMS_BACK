import { ApiProperty, OmitType } from '@nestjs/swagger';
import { ProductStatusEnum } from '../product.entity';

export class AddProductVariantDto {
  @ApiProperty()
  productId: number;

  @ApiProperty()
  description: string;

  @ApiProperty({
    enum: ProductStatusEnum,
  })
  status: ProductStatusEnum;

  @ApiProperty()
  stock: number;
}

export class CreateProductVariantDto extends OmitType(AddProductVariantDto, [
  'productId',
] as const) {}

export class CreateProductDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty({
    type: [CreateProductVariantDto],
  })
  variants?: CreateProductVariantDto[];
}
