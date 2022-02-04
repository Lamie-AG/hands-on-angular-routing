import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { ProductService } from 'src/app/core/product/product.service';
import { IResolvedProduct } from './resolved-product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<IResolvedProduct> {

  constructor(private service: ProductService) { }

  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<IResolvedProduct> {
    return this.service.getProduct(route.paramMap.get('ean13')).pipe(
      map(product => ({ product: product })),
      catchError(error => {
        console.error(error);
        return of({ product: null, error: error });
      })
    );
  }

}
