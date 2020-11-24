import { Controller, Delete, Get, Param, Post, Put, Body, HttpStatus, HttpCode, Header, Req, Res } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './dto/productservice';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductService) {

    }

    @Get()
    getAll() {
        return this.productsService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id:string ) {
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create (@Body() createProductDto: CreateProductDto){
        return this.productsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Remove' + id
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id:string) {
        return 'Update ' + id
    }
}
