import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ProductVariant } from './productVariant.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: number;

  @OneToMany(() => ProductVariant, (variant) => variant.product, {
    cascade: true,
  })
  variants: ProductVariant[];
}

export enum ProductStatusEnum {
  active = 'active',
}
