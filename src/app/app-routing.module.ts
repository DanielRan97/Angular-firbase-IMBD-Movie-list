import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { OutComponent } from './out/out.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '',  component: MainComponent,canActivate:[AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent,canActivate:[AuthGuard]},
  {path: 'out', component: OutComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
