import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  AddProductOrderDto,
  CreateOrderDto,
  GetOrdersDetailsDto,
  GetOrdersDto,
} from './dto/OrderProductDtos';
import { Order } from './order.entity';
import { OrderProduct } from './orderProduct.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order) private orderRepository: Repository<Order>,
    @InjectRepository(OrderProduct)
    private orderProductRepository: Repository<OrderProduct>,
  ) {}

  async getOrders(data: GetOrdersDto): Promise<Order[]> {
    return this.orderRepository.find({
      select: ['id', 'createdAt', 'client'],
      where: { type: data.type },
    });
  }

  async getOrdersDetails(data: GetOrdersDetailsDto) {
    return this.orderRepository.find({
      where: { id: data.orderId },
      relations: ['products'],
    });
  }

  async createOrder(order: CreateOrderDto) {
    const newOrder = this.orderRepository.create(order);
    return await this.orderRepository.save(newOrder);
  }

  async addProduct(data: AddProductOrderDto) {
    const newOrderProduct = this.orderProductRepository.create(data);
    return await this.orderProductRepository.save(newOrderProduct);
  }
}
