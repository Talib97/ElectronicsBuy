import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminAuthGuardService } from './admin/admin-auth-guard.service';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AuthGuardService } from './auth-guard.service';
import { CheckOutComponent } from './check-out/check-out.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';

const routes: Routes = [
  {path:"", component:LoginComponent },
  {path:"home", component:HomeComponent,canActivate:[AuthGuardService]},
  {path:"signup", component:SignupComponent},
  {path:"products", component: ProductsComponent,canActivate:[AuthGuardService]},
  {path:"shopping-cart", component:ShoppingCartComponent,canActivate:[AuthGuardService]},
  {path:"login", component:LoginComponent},
  {path:"check-out", component:CheckOutComponent,canActivate:[AuthGuardService]},
  {path:"order-success", component:OrderSuccessComponent,canActivate:[AuthGuardService]},
  {path:"my-orders", component:MyOrdersComponent,canActivate:[AuthGuardService]},
  {path:"admin/admin-products/newProduct", component:ProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
  {path:"admin/admin-products/:id", component:UpdateProductFormComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
  {path:"admin/admin-products", component:AdminProductsComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
  
  {path:"admin/admin-orders", component:AdminOrdersComponent,canActivate:[AuthGuardService,AdminAuthGuardService]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
