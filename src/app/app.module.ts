import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ProductFormComponent } from './admin/product-form/product-form.component'
import { UpdateProductFormComponent } from './update-product-form/update-product-form.component';
import { ProductcardComponent } from './products/productcard/productcard.component';
import { CategoryComponent } from './category/category.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin/admin-auth-guard.service';

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
    
    

  ],


  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent,
    ProductFormComponent,
    UpdateProductFormComponent,
    ProductcardComponent,
    CategoryComponent,
    SignupComponent,
    
  ],
  
  providers: [],
  bootstrap: [AppComponent,AuthGuardService,AdminAuthGuardService]
})
export class AppModule { }
