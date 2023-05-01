import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductVariant } from './productVariant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductVariant])],
  providers: [ProductsService],
  controllers: [ProductsController],
})
export class ProductsModule {}
