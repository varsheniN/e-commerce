import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';

const routes: Routes = [
  // { path: '', redirectTo: 'fashion', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fashion',
    component: FashionComponent,
  },
  {
    path: 'beauty',
    component: BeautyComponent,
  },
  {
    path: 'electronics',
    component: ElectronicsComponent,
  },
  {
    path: 'appliances',
    component: AppliancesComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout-success',
    component: CheckoutSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
