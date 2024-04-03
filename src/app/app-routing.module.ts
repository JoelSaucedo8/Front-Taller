import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AltaCompetenciaComponent } from './components/alta-competencia/alta-competencia.component';
import { HomeComponent } from './components/home/home.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';

const routes: Routes = [
  {path:'', redirectTo:"login", pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:SingUpComponent},
  {path:'alta-competencia', component:AltaCompetenciaComponent},
  {path:'**', redirectTo:"login", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
