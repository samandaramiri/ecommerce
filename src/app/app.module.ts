import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule} from '@angular/common/http';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PolicyComponent } from './policy/policy.component';
import { CheckoutService } from './service/checkout.service';
import { FilterPipe } from './shared/filter.pipe';
import {NgxPaginationModule } from 'ngx-pagination';
import { DashComponent } from './dash/dash.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { NewproductlistComponent } from './newproductlist/newproductlist.component';
import { AddnewproductComponent } from './addnewproduct/addnewproduct.component';
import { EditnewproductComponent } from './editnewproduct/editnewproduct.component';
import { BestproductlistComponent } from './bestproductlist/bestproductlist.component';
import { AddbestproductComponent } from './addbestproduct/addbestproduct.component';
import { EditbestproductComponent } from './editbestproduct/editbestproduct.component';
import { ContectlistComponent } from './contectlist/contectlist.component';
import { PaystripelistComponent } from './paystripelist/paystripelist.component';
import { PaycashlistComponent } from './paycashlist/paycashlist.component';
import { DashloginComponent } from './dashlogin/dashlogin.component';
import { ForgetlistComponent } from './forgetlist/forgetlist.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsingleComponent,
    CartComponent,
    CheckoutComponent,
    ShopComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    AboutusComponent,
    ContactUsComponent,
    TermsConditionsComponent,
    PolicyComponent,
    FilterPipe,
    DashComponent,
    AdduserComponent,
    UserlistComponent,
    EdituserComponent,
    AddproductComponent,
    ProductlistComponent,
    EditproductComponent,
    NewproductlistComponent,
    AddnewproductComponent,
    EditnewproductComponent,
    BestproductlistComponent,
    AddbestproductComponent,
    EditbestproductComponent,
    ContectlistComponent,
    PaystripelistComponent,
    PaycashlistComponent,
    DashloginComponent,
    ForgetlistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule,
    NgxPaginationModule, 
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
