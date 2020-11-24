import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './create-product.dto'

@Injectable()
export class ProductService {
    private products = []

    getAll() {
        return this.products
    }

    getById(id: string) {
        return this.products.find(res => res.id === id)
    }

    create(productDto: CreateProductDto) {
        this.products.push({
            ...productDto,
            id: Date.now().toString()
        })
    }
}