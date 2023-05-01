import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { OrderProduct } from './orderProduct.entity';

export enum OrderTypesEnum {
  purchase = 'purchase',
  sale = 'sale',
}

export enum OrderStatusEnum {
  pending = 'pending',
  inProgress = 'inProgress',
  delivered = 'delivered',
  canceled = 'canceled',
}

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  client: string;

  @Column({ type: 'varchar', default: OrderStatusEnum.pending })
  status: OrderStatusEnum;

  @Column('varchar')
  type: OrderTypesEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: number;

  @Column({
    type: 'timestamp',
    nullable: true,
  })
  commitmentDate: number;

  @OneToMany(() => OrderProduct, (orderProduct) => orderProduct.order, {
    cascade: true,
  })
  products: OrderProduct[];
}
