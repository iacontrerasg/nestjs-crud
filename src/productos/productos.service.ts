import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interfaces/productos.interface';
import { CreateProductDTO } from './dto/productos.dto';
@Injectable()
export class ProductosService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async getProducts(): Promise<Product[]> {
    const productos = await this.productModel.find();

    return productos;
  }

  
  async getProduct(productID: string): Promise<Product> {
    const productos = await this.productModel.findById(productID);
    //const productos = await this.productModel.findOne({ IdProduct: productID });
    return productos;
  }

  async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
    const productos = new this.productModel(createProductDTO);
    return await productos.save();
  }

  async updateProduct(
    productID: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const productos = await this.productModel.findByIdAndUpdate(
      productID,
      createProductDTO,
      { new: true },
    );
    return productos;
  }

  async deleteProduct(productID: string): Promise<Product> {
    const productos = await this.productModel.findByIdAndDelete(productID);
    return productos;
  }
}
