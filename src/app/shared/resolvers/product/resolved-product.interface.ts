import { IProduct } from "src/app/core/product/product.interface";

export interface IResolvedProduct {
    product: IProduct | null;
    error?: any;
}