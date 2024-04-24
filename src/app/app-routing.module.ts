import { Component,NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductPageComponent} from './product-page/product-page.component';
import {ProductDetailsLayoutComponent} from './product-details-layout/product-details-layout.component';


const routes: Routes = [
  { 
    path: 'product/details',
    component:ProductDetailsLayoutComponent,
    children:[
      {path: '', component: ProductPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
