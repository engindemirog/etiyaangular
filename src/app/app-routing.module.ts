import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products", component:ProductComponent},
  {path:"productdetail/:id", component:ProductDetailComponent},
  {path:"cart",component:CartComponent},
  {path:"product-add",component:ProductAddComponent, canActivate:[LoginGuard]},
  {path:"login", component:LoginComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//login("engin@engin.com","12345")-->User
//Login olmamışsa, Naviden login olabilmeli
//Login olmuşsa Naviye hoşgeldin Engin Demiroğ, Buton eklenecek, çıkış yap.
