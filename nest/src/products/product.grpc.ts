import { Observable } from "rxjs";

export interface ProductClientGrpc {
    createProduct: (data: CreateProductGrpcRequest)
        => Observable<CreateProductGrpcResponse>;
    findProducts: (data: FindProductsGrpcRequest)
        => Observable<FindProductGrpcResponse>;
}


export interface CreateProductGrpcRequest {
    name: string;
    description: string;
    price: number;
}

export interface CreateProductGrpcResponse {
    product: Product;
}

export interface FindProductsGrpcRequest {
}

export interface FindProductGrpcResponse {
    products: Product[];
}

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
};