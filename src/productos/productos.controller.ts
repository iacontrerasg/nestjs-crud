import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/productos.dto';
import { ProductosService } from './productos.service';

@Controller('productos')
export class ProductosController {
  constructor(private productService: ProductosService) {}

  @Get()
  async listProducts() {
    const product = await this.productService.getProducts();
    return product;
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    const product = await this.productService.getProduct(id);
    if (!product) {
      throw new NotFoundException('El producto no existe');
    }
    return product;
  }
  @Post()
  async reateProduct(@Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.createProduct(createProductDTO);
    return product;
  }

  @Put(':id')
  async updateProduct(
    @Param('id') id: string,
    @Body() ceateProductDTO: CreateProductDTO,
  ) {
    const product = await this.productService.updateProduct(
      id,
      ceateProductDTO,
    );

    if (!product) {
      throw new NotFoundException(
        'El producto no existe, no se actualizo nada',
      );
    }
    return product;
  }

  @Delete(':id')
  async deleteProduct(@Param('id') id: string) {
    const product = await this.productService.deleteProduct(id);

    if (!product) {
      throw new NotFoundException('El producto no existe, no se eliminó nada');
    }
    return product;
  }
}
