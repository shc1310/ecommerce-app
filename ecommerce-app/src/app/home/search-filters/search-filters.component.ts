import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.css'
})

export class SearchFiltersComponent {
  
  brands = ['Select All','Nike', 'Adidas', 'Samsung', 'LG', 'Apple'];
  ratings = ['Select All',1, 2, 3, 4, 5];
  productService=inject(ProductService);
  selectedBrand: string = this.brands[0];
  selectedPrice: number =0;
  selectedRating:number|string=this.ratings[0];
  filterByBrand(){
    console.log('brand',this.selectedBrand)
    this.productService.filterProductsByBrand(this.selectedBrand==='Select All'?'':this.selectedBrand)
  }

  filterByPrice(){
   console.log('selected price',this.selectedPrice)
    this.productService.filterProductsByPrice(this.selectedPrice)
  }

  filterByRating(){
    console.log('filterByRating',this.selectedRating)
    this.productService.filterProductsByRating(String(this.selectedRating)==='Select All'?0:this.selectedRating)
  }
}
