import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessfulComponent } from './order-successful/order-successful.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'products', component:ProductsComponent},
  {path: 'shopping-cart', component:ShoppingCartComponent, canActivate: [AuthGuard]},
  {path: 'check-out', component:CheckOutComponent, canActivate: [AuthGuard]},
  {path: 'order-success', component:OrderSuccessfulComponent, canActivate: [AuthGuard]},
  {path: 'my-order', component:MyOrdersComponent, canActivate: [AuthGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'admin/products', component:AdminProductsComponent, canActivate: [AuthGuard]},
  {path: 'admin/orders', component:AdminOrdersComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
