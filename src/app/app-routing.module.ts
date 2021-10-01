import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  {path:"",redirectTo:"dash",pathMatch:"full"},
  {path:"dash",loadChildren: () => import("./dashboard-view/dashboard-view.module").then(m => m.DashboardViewModule)},
  {path:"register" ,component:LandingPageComponent},
  {path:"**",redirectTo:"register"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
