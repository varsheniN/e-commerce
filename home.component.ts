import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  category = '';
  cartCount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
  ) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count: number) => {
      this.cartCount = count;
    });
  }
}
