import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components';
import { ProductsRoutingModule } from '../products/products-routing.module';



@NgModule({
  declarations: [
    ...components.components
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class BlogModule { }
