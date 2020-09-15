import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {UsuarioService} from "./servicios/http/usuario.service";

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    CartaPeliculaComponent
  ],
  imports: [ //Módulos que vamos a usar
    BrowserModule, //Importa las directivas ngFor y ngIf
    AppRoutingModule,
    HttpClientModule, // Importa el HttpClient inyectado al servicio de Usuario
  ],
  providers: [//Servicios
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
