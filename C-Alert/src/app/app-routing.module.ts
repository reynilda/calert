import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './pages/about-us/about-us.component';
import { ContactUSComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationTypeComponent } from './pages/registration-type/registration-type.component';
import { RegsterComponent } from './pages/regster/regster.component';

const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegsterComponent },
  { path: 'register-type', component: RegistrationTypeComponent },
  { path: 'about', component: AboutUSComponent },
  { path: 'contact', component: ContactUSComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
 
  LoginComponent,AboutUSComponent,
  ContactUSComponent,
  RegsterComponent,
  DashboardComponent,RegistrationTypeComponent
 
]