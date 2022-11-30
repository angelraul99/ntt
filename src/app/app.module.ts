import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{ ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { BienvenidoComponent } from './componentes/inicio/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/inicio/login/login.component';
import { RegistrarComponent } from './componentes/inicio/registrar/registrar.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { CuestionariosComponent } from './componentes/dashboard/cuestionarios/cuestionarios.component';
import { NavbarComponent } from './componentes/dashboard/navbar/navbar.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidoComponent,
    LoginComponent,
    RegistrarComponent,
    DashboardComponent,
    CuestionariosComponent,
    NavbarComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
