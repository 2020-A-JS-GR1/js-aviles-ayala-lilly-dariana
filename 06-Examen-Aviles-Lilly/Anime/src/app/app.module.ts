import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { IndexComponent } from './componentes/paginas/index/index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListarComponent as ListarProducto } from './componentes/producto/listar/listar.component';
import { CrearComponent as CrearProducto } from './componentes/producto/crear/crear.component';
import { ActualizarComponent as ActualizarProducto } from './componentes/producto/actualizar/actualizar.component';

import { ListarComponent as ListarTipoProducto} from './componentes/tipo-producto/listar/listar.component';
import { CrearComponent as CrearTipoProducto } from './componentes/tipo-producto/crear/crear.component';
import { ActualizarComponent as ActualizarTipoProducto} from './componentes/tipo-producto/actualizar/actualizar.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,

    ListarTipoProducto,
    CrearTipoProducto,
    ActualizarTipoProducto,
    ListarProducto,
    CrearProducto,
    ActualizarProducto,
    IndexComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
