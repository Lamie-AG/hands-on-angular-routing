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
  error?: string;

  constructor(private route: ActivatedRoute, private productService: ProductService) { 
    this.route.data.subscribe(data => {
      const resolvedData = data['resolvedData'];
      this.error = resolvedData.error;
      this.product = resolvedData.product;
    });
  }

  ngOnInit(): void {
  }
}
