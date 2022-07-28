import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsingleComponent } from './productsingle/productsingle.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PolicyComponent } from './policy/policy.component';
import { DashComponent } from './dash/dash.component';
import { EdituserComponent } from './edituser/edituser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';
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
const routes: Routes = [
  { path:"", component:LoginComponent },
  { path:"product-single", component:ProductsingleComponent },
  { path:"cart", component:CartComponent },
  { path:"checkout", component:CheckoutComponent },
  { path:"shop", component:ShopComponent },
  { path:"dashlogin/dash", component:DashComponent },
  { path:"home", component:HomeComponent },
  { path:"login", component:LoginComponent },
  { path:"signup", component:SignupComponent },
  { path:"forgot-password", component:ForgotPasswordComponent },
  { path:"aboutus", component:AboutusComponent},
  { path:"contact-us", component:ContactUsComponent},
  { path:"terms-conditions",component:TermsConditionsComponent},
  { path:"policy",component:PolicyComponent},
  { path:"userlist",component:UserlistComponent},
  { path:"edituser/:id",component:EdituserComponent},
  { path:"adduser",component:AdduserComponent},
  { path:"addproduct",component:AddproductComponent},
  { path:"editproduct/:id",component:EditproductComponent},
  { path:"productlist",component:ProductlistComponent},
  { path:"newproductlist",component:NewproductlistComponent},
  { path:"addnewproduct",component:AddnewproductComponent},
  { path:"editnewproduct/:id",component:EditnewproductComponent},
  { path:"bestproductlist",component:BestproductlistComponent},
  { path:"addbestproduct",component:AddbestproductComponent},
  { path:"editbestproduct/:id",component:EditbestproductComponent},
  { path:"contectlist",component:ContectlistComponent},
  { path:"paycashlist",component:PaycashlistComponent},
  { path:"paystripelist",component:PaystripelistComponent},
  { path:"dashlogin",component:DashloginComponent},
  { path:"forgetlist",component:ForgetlistComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
