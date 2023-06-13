import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './core/components/welcome/welcome.component';
import * as ShellComponent from './core/components';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome',
  },
  {
    path: 'welcome',
    component:ShellComponent.ShellComponent
  },
  {
    path:'products',
    loadChildren:() =>
    import('./features/products/products.module').then(
      m => m.ProductsModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
