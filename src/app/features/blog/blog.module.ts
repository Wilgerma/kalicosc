import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { BlogComponent } from './components/blog/blog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogEditComponent } from './components/blog-edit/blog-edit.component';



@NgModule({
  declarations: [
    ...components.components,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule 
  ]
})
export class BlogModule { }
