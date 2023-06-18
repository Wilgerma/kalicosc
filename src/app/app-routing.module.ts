import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as HomeComponents from './home/components';
import * as ProductComponents from './features/products/components'
import * as ErrorComponents from './features/error/components';
import { ProductsModule } from './features/products/products.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogModule } from './features/blog/blog.module';
import { ProtectedModule } from './protected/protected.module';
const routes: Routes = [
  { path: 'welcome', component: HomeComponents.ShellComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', component: ErrorComponents.Error404Component }
  // {
  //   path: '',
  //   component: HomeComponents.ShellComponent,
  //   children: [
  //     { path: 'welcome', component: HomeComponents.WelcomeComponent },
  //     {
  //       path: '',
  //       // canActivate: [AuthGuard],
  //       loadChildren: () =>
  //         import('./features/products/products.module').then(m => m.ProductsModule)
  //     },
  //     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  //   ]
  // },
  // { path: '**', component: ErrorComponents.Error404Component }

];
@NgModule({
  imports: [RouterModule.forRoot(routes),
    ProductsModule,
    BlogModule,
    SharedModule,
    ProtectedModule
  ],
  exports: [
    ProductsModule,
    SharedModule,
  ]
})
export class AppRoutingModule { }
