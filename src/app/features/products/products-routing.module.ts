import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as ProductsComponents from './components'

const routes: Routes = [
  {
    path: 'products', component: ProductsComponents.ShellComponent
  },
  {
    path: 'products/:id', component: ProductsComponents.ProductsDetailComponent
  },
  {
    path:'products/:id/edit',component:ProductsComponents.ProductEditComponent
  }
    //canActivate:[AuthGuard],
    // children: [
    //   {
    //     path: '', component: ProductsComponents.ShellComponent
    //   },
    //   {
    //     path: ':id',
    //     component: ProductsComponents.ProductsDetailComponent,
    //     //resolve: { resolvedData: ProductResolver }
    //   },
    //   {
    //     path: ':id/edit',
    //     component: ProductsComponents.ProductEditComponent,
    //     // resolve: { resolvedData: ProductResolver },
    //     // children: [
    //     //   { path: '', redirectTo: 'info', pathMatch: 'full' },
    //     //   { path: 'info', component: ProductEditInfoComponent },
    //     //   { path: 'tags', component: ProductEditTagsComponent }
    //     // ]
    //   },
    // ]

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ProductsRoutingModule { }
