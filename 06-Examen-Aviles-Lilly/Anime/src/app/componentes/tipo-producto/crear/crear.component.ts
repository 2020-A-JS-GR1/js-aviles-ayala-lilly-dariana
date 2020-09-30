import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl,ReactiveFormsModule   } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import {TipoProductosService} from '../../../servicios/tipo-productos.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {
  tipoProductoForm: FormGroup;
  loading = false; //para evitar que se bloqueen los otros botones - se guarde dos veces
  submited = false // para evitar ques se envíen dos veces lo mismo

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private servicio: TipoProductosService
  ) {

   }

  ngOnInit(): void {
    this.tipoProductoForm=this.formBuilder.group({
      categoria:['',[Validators.required],[]],
      descripcion: ['',[Validators.required], []],
      estado: ['', []],
      publico: ['', []],
    })
  }


  // convenience getter for easy access to form fields
  get f() { return this.tipoProductoForm.controls; }

  onSubmit():void{
    this.submited=true;
    if(this.tipoProductoForm.invalid){
      return
    }
    this.loading=true;
    this.servicio.Registrar(this.tipoProductoForm.value)
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
