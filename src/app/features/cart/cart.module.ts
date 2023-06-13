import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from './cart-routing.module';
import * as components from './components'


@NgModule({
  declarations: [
    ...components.components
  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
