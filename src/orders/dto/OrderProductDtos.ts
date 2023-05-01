import { OrderTypesEnum } from '../order.entity';
import { ApiProperty, OmitType } from '@nestjs/swagger';

export class GetOrdersDto {
  @ApiProperty({
    enum: OrderTypesEnum,
  })
  type?: OrderTypesEnum;
}

export class GetOrdersDetailsDto {
  @ApiProperty()
  orderId: number;
}

export class AddProductOrderDto {
  @ApiProperty()
  productId: number;

  @ApiProperty()
  orderId: number;

  @ApiProperty()
  quantity: number;
}

export class CreateProductOrderDto extends OmitType(AddProductOrderDto, [
  'orderId',
] as const) {}

export class CreateOrderDto {
  @ApiProperty()
  client: string;

  @ApiProperty({
    enum: OrderTypesEnum,
  })
  type: OrderTypesEnum;

  @ApiProperty()
  commitmentDate?: number;

  @ApiProperty({
    type: [CreateProductOrderDto],
  })
  products?: AddProductOrderDto[];
}
