import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as ShellComponent from './components';
import { CoreRoutingModule } from './core-routing.module';



@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  declarations: [...ShellComponent.components]
})
export class CoreModule { }
