import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDetailsLayoutComponent } from './product-details-layout/product-details-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductPageComponent,
    ProductDetailsLayoutComponent,
    
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselComponent,
    HammerModule,
    MatToolbarModule,
    MatButtonModule
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
