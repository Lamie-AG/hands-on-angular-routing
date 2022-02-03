import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/core/product/product.interface';
import { ProductService } from 'src/app/core/product/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product!: IProduct;

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    let ean13 = route.snapshot.paramMap.get('ean13');
    
    if (ean13)
      this.product = productService.getProduct(ean13);
  }

  ngOnInit(): void {
  }

}
