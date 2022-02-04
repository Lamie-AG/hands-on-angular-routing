import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationService } from './core/authentication/authentication.service';
import { ProductService } from './core/product/product.service';
import { HomeModule } from './features/home/home.module';
import { LoginModule } from './features/login/login.module';
import { ProductModule } from './features/product/product.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    LoginModule,
    HomeModule
  ],
  providers: [ProductService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
