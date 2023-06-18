import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as DashboardComponets from './components';
import { ProtectedRoutingModule } from './protected-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [...DashboardComponets.components],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule
  ]
})
export class ProtectedModule { }
