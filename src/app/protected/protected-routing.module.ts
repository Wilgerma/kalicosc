import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import * as DashBoardComponents from './components';


const routes: Routes = [
  { path: 'blog-dashboard', component: DashBoardComponents.BlogDashboardComponent },
  { path: 'products-dashboard', component: DashBoardComponents.ProductsDashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class ProtectedRoutingModule { }
