import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProductsDetailComponent } from "./products-detail/products-detail.component";
import { ProductsListComponent } from "./products-list/products-list.component";
import { ProductsComponent } from "./products/products.component";
import { ShellComponent } from "./shell/shell.component";


export const components = [
  ProductsComponent,
  ProductsListComponent,
  ProductsDetailComponent,
  ShellComponent,
  ProductEditComponent
];

export * from './products/products.component';
export * from './products-detail/products-detail.component';
export * from './products-list/products-list.component';
export * from './shell/shell.component';
export * from './product-edit/product-edit.component';

