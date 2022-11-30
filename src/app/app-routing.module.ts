import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/inicio/bienvenido/bienvenido.component';
import { RegistrarComponent } from './componentes/inicio/registrar/registrar.component';
import { LoginComponent } from './componentes/inicio/login/login.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CuestionariosComponent } from './componentes/dashboard/cuestionarios/cuestionarios.component';

const routes: Routes = [
  {path:'',redirectTo:'/inicio',pathMatch:'full'},
  {path: 'inicio',component: InicioComponent,children:[
    {path:'', component: BienvenidoComponent},
    {path: 'registrar',component: RegistrarComponent},
    {path:'login',component:LoginComponent},
  ]},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'',component:CuestionariosComponent}

  ]},
  {path:'**',redirectTo:'/bienvenido',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
