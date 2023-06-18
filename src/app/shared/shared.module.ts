import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as components from './components'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ...components.components
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports:[
    BrowserModule,
    CommonModule,
    NgbModule,
    RouterModule
  ]
})
export class SharedModule { }
