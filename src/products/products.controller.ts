import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateProductDto,
  CreateProductVariantDto,
} from './dto/ProductVariantDtos';
import { ProductsService } from './products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  findAll() {
    return this.productService.getProducts();
  }

  @Get('variants')
  findVariants() {
    return this.productService.getProductVariants();
  }

  @Post()
  create(@Body() product: CreateProductDto) {
    return this.productService.createProduct(product);
  }

  @Post('variant')
  createVariant(@Body() body: CreateProductVariantDto) {
    return this.productService.createProductVariant(body);
  }
}
