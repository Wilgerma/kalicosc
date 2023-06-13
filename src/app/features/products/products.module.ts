import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import * as components from './components';
import { ProductsComponent } from './components/products/products.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ...components.components,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  exports:[RouterModule]
})
export class ProductsModule { }
