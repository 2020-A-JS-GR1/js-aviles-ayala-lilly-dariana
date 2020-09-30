import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{IndexComponent} from './componentes/paginas/index/index.component';
import{ListarComponent as ListarProducto} from './componentes/producto/listar/listar.component';
import{CrearComponent} from './componentes/producto/crear/crear.component';
import{ActualizarComponent} from './componentes/producto/actualizar/actualizar.component';
import{ActualizarComponent as ActualizarTipoProducto} from './componentes/tipo-producto/actualizar/actualizar.component'
import{CrearComponent as CrearTipoProducto} from './componentes/tipo-producto/crear/crear.component';
import{ListarComponent as ListarTipoProducto} from './componentes/tipo-producto/listar/listar.component'
import { TipoProducto } from './modelo/tipo-producto';

const routes: Routes = [
  {path: '',component: IndexComponent},
  {path: 'Producto', component: ListarProducto},
  {path:'Producto/crear', component:CrearComponent},
  {path:'Producto/actualizar/:id',component:ActualizarComponent},
  {path: 'tipoProducto/actualizar/:id', component:ActualizarTipoProducto},
  {path:'tipoProducto', component:ListarTipoProducto},
  {path:'tipoProducto/crear',component:CrearTipoProducto},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
