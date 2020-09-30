import { Component, OnInit } from '@angular/core';
import { TipoProducto } from 'src/app/modelo/tipo-producto';
import{TipoProductosService} from '../../../servicios/tipo-productos.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  tiposProductos: TipoProducto[] = [];
  tiposProductos1: TipoProducto[] = [];
  constructor(
    private tipoProducto: TipoProductosService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.tipoProducto.Listar()
      .subscribe( data =>
       {
       this.tiposProductos=data;
       this.tiposProductos1=this.tiposProductos;
         }, error=> {
          console.log(error);
       })
    // this.tiposProductos= [
    //   {id:1,nombre:'personal', descripcion:'aksdjfksdjf'},
    //   {id:2,nombre:'grupal', descripcion:'aksdjf'}
    //]

  }

  buscar(){
    var dato = ( <HTMLInputElement>document.getElementById("buscar")).value;
    this.tiposProductos=this.tiposProductos1;
    this.tiposProductos=this.tiposProductos.filter(a=> a.categoria.includes(dato));
  }

  actualizar(id:number){
    this.router.navigate(['tipoProducto/actualizar',id]);
  }

  crear(){
    this.router.navigate(['tipoProducto/crear']);
  }

  eliminar(id:number)
  {
    this.tipoProducto.Eliminar(id)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['tipoProducto']);
    },error=>{
      console.log(error);
    })
    //console.log(id);
  }
}
