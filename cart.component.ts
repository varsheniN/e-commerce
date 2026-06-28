import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<CartItem[]>;

  constructor(
    private cartService: CartService,
    private router: Router,
  ) {
    this.cartItems$ = this.cartService.cartItems$;
  }
  items: any[] = [];

  ngOnInit() {
    this.cartService.cartItems$.subscribe((data) => {
      this.items = data;
    });
  }

  onUpdateQuantity(productId: number, newQuantity: number) {
    this.cartService.updateQuantity(productId, newQuantity);
  }

  onRemoveItem(productId: number) {
    this.cartService.removeItem(productId);
  }

  calculateCartTotal(): number {
    let total = 0;
    // Subscribe to the observable to get the latest list
    this.cartService.cartItems$.subscribe((items) => {
      total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    });
    return total;
  }

  onPlaceOrder() {
    this.router.navigate(['/checkout-success']); // Navigate to the fresh page
  }
}
