import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/login/login/login.component';
import { ProductDetailComponent } from './features/product/product-detail/product-detail.component';
import { ProductListComponent } from './features/product/product-list/product-list/product-list.component';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  { path: 'products/:ean13', component: ProductDetailComponent },
  { path: 'login', component: LoginComponent },
  {path: 'home', component: HomeComponent},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
