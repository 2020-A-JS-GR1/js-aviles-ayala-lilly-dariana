import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,ReactiveFormsModule   } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {TipoProductosService} from '../../../servicios/tipo-productos.service';
import { first } from 'rxjs/operators';
import { TipoProducto } from 'src/app/modelo/tipo-producto';



@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  tipoProductoForm: FormGroup;
  loading = false; //para evitar que se bloqueen los otros botones - se guarde dos veces
  submited = false // para evitar ques se envíen dos veces lo mismo

  id: number;
  tipoProducto: TipoProducto;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicio: TipoProductosService
  ) { 
    this.id=+route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.tipoProductoForm=this.formBuilder.group({
      id:[this.id,[]],
      nombre:['',[Validators.required],[]],
      descripcion: ['',[Validators.required], []]
    })
     this.servicio.Obtener(this.id)
     .subscribe(data=>{
      this.tipoProducto=data
     }, error =>{
       console.log('ERROR',error)
    })
   // this.tipoProducto={id:1,nombre:'Fer',descripcion:'dkfjadsjfks'}
  }

  // convenience getter for easy access to form fields
  get f() { return this.tipoProductoForm.controls; }

  onSubmit():void{
    this.submited=true;
    if(this.tipoProductoForm.invalid){
      return
    }
    this.loading=true;
    this.servicio.Actualizar(this.tipoProductoForm.value)
      .pipe(first())
      .subscribe(data=>{
        this.router.navigate(['tipoProducto']);
    
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
