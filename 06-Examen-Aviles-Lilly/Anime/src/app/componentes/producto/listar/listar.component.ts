import { Component, OnInit } from '@angular/core';
import{TipoProductosService} from '../../../servicios/tipo-productos.service'
import {Router} from '@angular/router'
import{ProductosService} from '../../../servicios/productos.service'
import { Producto } from 'src/app/modelo/producto';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  productos:any[]=[];
  productos1:any[]=[];
  constructor(
    private tipoProducto: TipoProductosService,
    private router: Router,
    private productoServicio: ProductosService,
  ) { }

  ngOnInit(): void {
     this.productoServicio.Listar()
     .subscribe( data =>
       {
         this.productos=data;
         this.productos1=this.productos;
      }, error=> {
         console.log(error);
      })
    // this.productos= [
    //    {id:1,nombre:'Lilly', descripcion:'aksdjfksdjf', precio:30, color:'blanco', cantidad:4,idTipo:1}
      // {id:2,nombre:'Lilly', descripcion:'aksdjfksdjf', precio:30, color:'blanco', cantidad:4,idTipo:1}
  //  ]
    
  }

  buscar(){
    var dato = ( <HTMLInputElement>document.getElementById("buscar")).value;
    console.log(dato);
    this.productos=this.productos1;
    this.productos=this.productos.filter(a=> a.nombre.includes(dato));
  }

  actualizar(id:number){
    this.router.navigate(['Producto/actualizar',id]);
  }

  crear(){
    this.router.navigate(['Producto/crear']);
  }

  eliminar(id:number)
  {
   this.productoServicio.Eliminar(id)
   .subscribe(data=>{
    console.log(data);
    this.router.navigate(['Producto']);
  },error=>{
    console.log(error);
  })
  }

}
