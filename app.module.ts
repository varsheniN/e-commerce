import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutSuccessComponent } from './checkout-success/checkout-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FashionComponent,
    BeautyComponent,
    ElectronicsComponent,
    AppliancesComponent,
    BooksComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CheckoutSuccessComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
