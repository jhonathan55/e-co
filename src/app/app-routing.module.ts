import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'nav',component:NavComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
 
  exports: [RouterModule, CommonModule],
  
 
})
export class AppRoutingModule { }
