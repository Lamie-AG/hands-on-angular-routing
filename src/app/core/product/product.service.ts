import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products!: IProduct[];

  constructor() {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.products = [
      { ean13: "1234567890123", name: "Chocolate Bar", description: "yummy yummy choco", price: 1.99, stock: 200 },
      { ean13: "1234567890124", name: "Duff Beer (6x)", description: "glup glup liquid", price: 5.99, stock: 300 },
      { ean13: "1234567890125", name: "Five-Gum", description: " 4+1=5-gum", price: 1.59, stock: 100 },
      { ean13: "1234567890126", name: "Shovel", description: "dig dig dig", price: 129.99, stock: 10 },
      { ean13: "1234567890127", name: "Kinder Country", description: "super yummy choco-bar", price: 0.99, stock: 500 },
    ];
  }

  getProduct(ean13: string | null): Observable<IProduct> {
    return new Observable(observer => {
      setInterval(() => {
        for (let product of this.products) {
          if (product.ean13 == ean13) {
            observer.next(product);
            observer.complete();
          }
        }
        observer.error("Product not found");
      }, 500)
    });
  }

  updateProduct(ean13: string, product: IProduct): void {
    // todo
  }
}
