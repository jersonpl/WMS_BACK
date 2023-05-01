import { Body, Controller, Get, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  AddProductOrderDto,
  CreateOrderDto,
  GetOrdersDetailsDto,
  GetOrdersDto,
} from './dto/OrderProductDtos';
import { OrdersService } from './orders.service';

@ApiTags('orders')
@Controller('orders')
export class OrdersController {
  constructor(private orderService: OrdersService) {}

  @Get()
  async getOrders(@Query() query: GetOrdersDto) {
    return await this.orderService.getOrders(query);
  }

  @Get('details')
  async getOrdersDetails(@Query() query: GetOrdersDetailsDto) {
    return await this.orderService.getOrdersDetails(query);
  }

  @Post()
  async create(@Body() order: CreateOrderDto) {
    return await this.orderService.createOrder(order);
  }

  @Put('addProduct')
  async addProduct(@Body() body: AddProductOrderDto) {
    return await this.orderService.addProduct(body);
  }
}
