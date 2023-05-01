import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { ProductVariant } from './productVariant.entity';
import {
  AddProductVariantDto,
  CreateProductDto,
  CreateProductVariantDto,
} from './dto/ProductVariantDtos';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
    @InjectRepository(ProductVariant)
    private productVariantRepository: Repository<ProductVariant>,
  ) {}

  async getProducts(): Promise<Product[]> {
    return this.productRepository.find({});
  }

  async getProductVariants(): Promise<ProductVariant[]> {
    return this.productVariantRepository.find({
      select: ['description', 'product', 'createdAt'],
      relations: ['product'],
    });
  }

  async createProduct(product: CreateProductDto) {
    const newProduct = this.productRepository.create({ ...product });
    return await this.productRepository.save(newProduct);
  }

  async createProductVariant(product: CreateProductVariantDto) {
    const newProductVariant = this.productVariantRepository.create(product);
    return await this.productVariantRepository.save(newProductVariant);
  }
}
