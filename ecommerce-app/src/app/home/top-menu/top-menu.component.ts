import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { Category } from '../../shared/category.model';
import { ProductService } from '../product.service';
import { response } from 'express';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent implements OnInit {
 
  categories: Category[] =[];
  productService=inject(ProductService);
constructor( private ref: ChangeDetectorRef,){}

  ngOnInit(): void {
    this.productService.getCategories().subscribe((response)=>
      this.categories= response);
   }

  filterByCategory(categoryId: number): void {
    this.productService.filterProductsByCategory(categoryId);
    console.log('filtered category')
  }
}
