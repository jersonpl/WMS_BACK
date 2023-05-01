import { ProductVariant } from 'src/products/productVariant.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Order } from './order.entity';

@Entity('orderProducts')
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Order)
  @JoinColumn()
  order: Order;
  orderId: number;

  @ManyToOne(() => ProductVariant)
  @JoinColumn()
  product: ProductVariant;
  productId: number;

  @Column('int')
  quantity: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: number;
}
