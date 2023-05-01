import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product, ProductStatusEnum } from './product.entity';

@Entity('productVariants')
export class ProductVariant {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn()
  product: Product;
  productId: number;

  @Column('varchar')
  description: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  status: ProductStatusEnum;

  @Column({ type: 'numeric', nullable: true })
  width?: number;

  @Column({ type: 'numeric', nullable: true })
  height?: number;

  @Column({ type: 'numeric', nullable: true })
  price?: number;

  @Column({ type: 'varchar', nullable: true })
  color?: string;

  @Column({ type: 'varchar', nullable: true })
  brand?: string;

  @Column('int')
  stock: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: number;
}
