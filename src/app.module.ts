import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './products/dto/productservice';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController],
  providers: [AppService, ProductService],
})
export class AppModule {}
