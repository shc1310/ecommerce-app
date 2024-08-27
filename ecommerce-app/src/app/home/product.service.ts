import { Injectable } from '@angular/core';
import { Category } from '../shared/category.model';
import { Product } from '../shared/product.model';
import { BehaviorSubject, filter, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Mobile' },
    { id: 2, name: 'Microwave' },
    { id: 3, name: 'TV' },
    { id: 4, name: 'Refrg' },
    { id: 5, name: 'Shoes' },
  ];

  private products: Product[] = [
    { id: 1, name: 'Nike sneaker', price: 15000, rating: 1, categoryId: 5 },
    { id: 2, name: 'Adidas sports', price: 2000, rating: 2, categoryId: 2 },
    { id: 3, name: 'Samsung 40', price: 5000, rating: 3.5, categoryId: 3 },
    { id: 4, name: 'LG', price: 10000, rating: 4, categoryId: 4 },
    { id: 5, name: 'Iphone 14', price: 100000, rating: 5, categoryId: 1 },
    { id: 6, name: 'One Plus', price: 10000, rating: 2, categoryId: 1 },
    { id: 7, name: 'Vivo 10', price: 10000, rating: 3, categoryId: 1 },
    { id: 8, name: 'Samsung Galaxy', price: 10000, rating: 4, categoryId: 1 },
  ];
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  productsObservable = this.productsSubject.asObservable();
  // private filteredProductsSubject = new BehaviorSubject<Product[]>(this.products);

  private cartSubject = new BehaviorSubject<Product[]>([]);
  private wishlistSubject = new BehaviorSubject<Product[]>([]);
  constructor() { }
  setProducts(products:Product[],isFilter?:boolean){
    console.log('in subjects',this.productsSubject)
    if(!isFilter)
      products=this.products
     this.productsSubject.next(products);
  }
  getProducts():Observable<Product[]>{
return this.productsObservable;
  }
  getCategories():Observable<Category[]>{
    return of(this.categories);
  }
  addToCart(product: Product): void {
    const cart = this.cartSubject.value;
    cart.push(product);
    this.cartSubject.next(cart);
  }

  getCart(): BehaviorSubject<Product[]> {
    return this.cartSubject;
  }

  addToWishlist(product: Product): void {
    const wishlist = this.wishlistSubject.value;
    wishlist.push(product);
    this.wishlistSubject.next(wishlist);
  }

  getWishlist(): BehaviorSubject<Product[]> {
    return this.wishlistSubject;
  }

  filterProductsByCategory(categoryId: number): void {
    const filteredProducts = this.products.filter(product => product.categoryId === categoryId);
    this.productsSubject.next(filteredProducts);
  }

  filterProductsByBrand(brand:string): void {
    const filteredProducts = this.products.filter(product => product.name.includes(brand));
    console.log('filtered brand',filteredProducts)
    this.productsSubject.next(filteredProducts);
  }

  filterProductsByPrice(selectedPrice:number){
const filteredProducts=this.products.filter(products=>products.price>=selectedPrice);
this.productsSubject.next(filteredProducts);
  }

  filterProductsByRating(selectedRating:number|string){
    console.log('rating',selectedRating)
    const filteredProducts=this.products.filter(products=>products.rating>=Number(selectedRating));
    this.productsSubject.next(filteredProducts);
  }
}
