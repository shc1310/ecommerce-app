import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  cartCount:Number=0
  wishlistCount:Number=0
  router=inject(Router) ;
  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}
