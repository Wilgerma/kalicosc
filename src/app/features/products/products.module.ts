import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import * as ProductComponent from './components';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ...ProductComponent.components,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],

})
export class ProductsModule { }
