import { Component, inject } from '@angular/core';
import { Product } from '../../shared/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
   productService=inject( ProductService)
  constructor() {}

  ngOnInit(): void {

    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
    console.log('products',this.products)
  }

  addToCart(product: Product): void {
    this.productService.addToCart(product);
  }

  addToWishlist(product: Product): void {
    this.productService.addToWishlist(product);
  }
}
