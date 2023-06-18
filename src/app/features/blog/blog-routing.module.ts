import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import * as BlogComponets from './components';

const routes: Routes = [
  { path: 'blog', component: BlogComponets.BlogComponent },

  {
    path: 'blog/:id', component: BlogComponets.BlogDetailComponent
  },
  {
    path:'blog/:id/edit',component:BlogComponets.BlogEditComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class BlogRoutingModule { }
