import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //localhost:4200/movieDetails/7544
  
   {path:'product-list',component:ProductListComponent},
  
   {path:'home',component:HomeComponent},

  {path:'product-details/:id',component:ProductDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
