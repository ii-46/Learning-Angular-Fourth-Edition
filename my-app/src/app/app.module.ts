import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { ProductComponent } from './products/product/product.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductsModule, OrdersModule, ProductComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
