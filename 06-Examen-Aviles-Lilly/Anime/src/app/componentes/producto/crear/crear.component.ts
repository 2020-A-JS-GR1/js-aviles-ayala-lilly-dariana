import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ReactiveFormsModule,
  MinLengthValidator
} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {TipoProductosService} from '../../../servicios/tipo-productos.service';
import {ProductosService} from '../../../servicios/productos.service';
import { first } from 'rxjs/operators';
import {TipoProducto} from '../../../modelo/tipo-producto';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  productoForm: FormGroup;
  loading = false; //para evitar que se bloqueen los otros botones - se guarde dos veces
  submited = false // para evitar ques se envíen dos veces lo mismo
  tiposProductos:  TipoProducto[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicioTipoProducto: TipoProductosService,
    private servicioProducto: ProductosService
  ) { }

  ngOnInit(): void {
    this.productoForm=this.formBuilder.group({
      nombre:['',[Validators.required],[]],
      descripcion: ['',[Validators.required], []],
      anio: ['',[Validators.required],[Validators.minLength(9999)], []],
      subtitulo:['',[]],
      calificacion:['',[Validators.required], []],
      imagen:['',[Validators.required], []],
      idTipo: [null, []]
    })
  }


  // convenience getter for easy access to form fields
  get f() { return this.productoForm.controls; }

  onSubmit():void{
    this.submited=true;
    if(this.productoForm.invalid){
      return
    }
    this.loading=true;
    this.servicioProducto.Registrar(this.productoForm.value)
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
    this.router.navigate(['Producto']);
  }

}
