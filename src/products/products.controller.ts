import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get()
    getAll() {
        return 'getAll'
    }

    @Get(':id')
    getOne(@Param('id') id:string ): string {
        return 'getOne' + id
    }

    @Post()
    create () {

    }

    @Delete()
    remove() {
        
    }
}
