import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,ReactiveFormsModule   } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {TipoProductosService} from '../../../servicios/tipo-productos.service';
import { first } from 'rxjs/operators';
import { TipoProducto } from 'src/app/modelo/tipo-producto';
import { Producto } from 'src/app/modelo/producto';
import {ProductosService} from '../../../servicios/productos.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  ProductoForm: FormGroup;
  loading = false; //para evitar que se bloqueen los otros botones - se guarde dos veces
  submited = false // para evitar ques se envíen dos veces lo mismo

  id: number;
  producto: any;
  tiposProductos: TipoProducto[]=[];
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicio: TipoProductosService,
    private servicioProducto: ProductosService
  ) {
    this.id=+route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ProductoForm=this.formBuilder.group({
      id:[this.id,[]],
      nombre:['',[Validators.required],[]],
      descripcion: ['',[Validators.required], []],
      anio: ['',[Validators.required],[Validators.minLength(9999)], []],
      subtitulo:['',[]],
      calificacion:['',[Validators.required], []],
      imagen:['',[Validators.required], []],
      idTipo: [null, []]
    })
     this.servicioProducto.Obtener(this.id)
     .subscribe(data=>{
       this.producto=data
     }, error =>{
       console.log('ERROR',error)
    })
   // this.producto={id:1,nombre:'Fer',descripcion:'dkfjadsjfks', precio:30, color:'blanco', cantidad:4,idTipo:1}
  }

  // convenience getter for easy access to form fields
  get f() { return this.ProductoForm.controls; }

  onSubmit():void{
    this.submited=true;
    if(this.ProductoForm.invalid){
      return
    }
    this.loading=true;
    this.servicioProducto.Actualizar(this.ProductoForm.value)
      .pipe(first())
      .subscribe(data=>{
        this.router.navigate(['Producto']);

    },
    error=> {
      console.log('ERROR',error);
    }

      )
  }

  cancel() {
    this.router.navigate(['tipoProducto']);
  }

}
