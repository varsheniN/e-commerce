import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  private cartCountSubject = new BehaviorSubject<number>(0);

  cartItems$ = this.cartItemsSubject.asObservable();
  cartCount$ = this.cartCountSubject.asObservable();

  addToCart(product: any) {
    // Check if item exists, if yes increase quantity, else add new
    const existingItem = this.cartItems.find(
      (i) => i.productShortName === product.productShortName,
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: Math.random(), // Unique ID for tracking
        productShortName: product.productShortName,
        thumbnailImage: product.thumbnailImage,
        categoryName: product.categoryName,
        description: product.description,
        price: product.price,
        quantity: 1,
        isInStock: product.isInStock,
        isAdded: true,
      });
    }
    this.updateSubjects();
  }

  updateQuantity(productId: number, newQuantity: number) {
    const item = this.cartItems.find((i) => i.productId === productId);

    if (item && newQuantity > 0) {
      // If quantity is more than 0, just update it
      item.quantity = newQuantity;
      this.updateSubjects();
    } else if (item && newQuantity === 0) {
      // If quantity reaches 0, remove the item entirely
      this.removeItem(productId);
    }
  }

  removeItem(productId: number) {
    this.cartItems = this.cartItems.filter(
      (item) => item.productId !== productId,
    );
    this.updateSubjects();
  }

  private updateSubjects() {
    this.cartItemsSubject.next([...this.cartItems]);
    this.cartCountSubject.next(
      this.cartItems.reduce((acc, item) => acc + item.quantity, 0),
    );
  }

  clearCart() {
    this.cartItems = [];
    this.updateSubjects();
  }
}

export interface CartItem {
  productId: number;
  productShortName: string;
  thumbnailImage: string;
  categoryName: string;
  description: string;
  price: number;
  quantity: number;
  isInStock: boolean;
  isAdded: boolean; // Tracking for "Add/Added" button
}
