import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgbModule
  ],
  declarations: []
})
export class CoreModule { }
