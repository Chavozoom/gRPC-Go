import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ClientGrpc } from "@nestjs/microservices";
import { ProductClientGrpc } from "./product.grpc";
import { lastValueFrom } from "rxjs";

@Injectable()
export class ProductsService implements OnModuleInit {
  private _productGrpcService: ProductClientGrpc;

  constructor(
    @Inject('PRODUCT_PACKAGE')
    private productGrpcPackage: ClientGrpc,
  ) { }

  onModuleInit() {
    this._productGrpcService = this.productGrpcPackage.getService('ProductService');
  }

  async create(createProductDto: CreateProductDto) {
    try {
      return await lastValueFrom(this._productGrpcService.createProduct(createProductDto));
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async findAll() {
    return await lastValueFrom(this._productGrpcService.findProducts({}));
  }
}
