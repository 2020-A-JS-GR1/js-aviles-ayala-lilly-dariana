import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
// import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
// import {RutaListaUsuarioComponent} from "./rutas/ruta-lista-usuario/ruta-lista-usuario.component";
// import {RutaEditarUsuarioComponent} from "./rutas/ruta-editar-usuario/ruta-editar-usuario.component";


const routes: Routes = [
  {
    component: RutaInicioComponent, // Componente
    path: 'inicio' // URL
  },
  {
    component: RutaLoginComponent, // Componente
    path: 'login' // URL
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'

  },
  // {
  //   path: '',
  //   redirectTo: '**',
  //   pathMatch: PageNotFoundComponent
  //
  // }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
