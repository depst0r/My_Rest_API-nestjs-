import { Module } from '@nestjs/common'
import { ProductService } from './dto/productservice';
import { ProductsController } from './products.controller';

@Module({
    providers: [ProductService],
    controllers: [ProductsController]
})
export class ProductsModule {
    
}