import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mi-proyecto';
  habilitado = true;


  arregloPeliculas = [
    {
      id: 1,
      url: "https://es.web.img3.acsta.net/medias/nmedia/18/84/87/96/19769123.jpg",
      descripcion: 'Arriety es un ser diminuto que por su curiosidad revela su existencia, teniendo que afrontar graves peligros para sobrevivir ',
      nombrePelicula: 'Arriety y el mundo de los diminutos'
    },
    {
      id: 2,
      url: "https://es.web.img2.acsta.net/pictures/16/02/08/12/58/542941.jpg",
      descripcion: 'Anna, una chica solitaria y curiosa, decide explorar una vieja mansión abandonada y se encuentra con una chica rubia misteriosa que sólo ella puede ver',
      nombrePelicula: 'Los recuerdos de Marnie'
    },
    {
      id: 3,
      url: "https://i2.wp.com/concdecultura.com/wp-content/uploads/2020/01/NinoKuni-netflix-concdecultura10.jpg?fit=739%2C715&amp;ssl=1",
      descripcion: 'Yuu y Haru mejores amigos desde la infancia viajan entre el mundo real y un universo de fantasía paralelo para ayudar a su amiga Kotona, cuya vida está en peligro',
      nombrePelicula: 'NiNoKuni'
    }
  ]

  arregloNumeros = [1, 2, 3]
  arregloUsuarios = [];
  arregloObservables = [];


  // Inyectando dependencias en el componente principal
  constructor(
    private readonly _usuarioService: UsuarioService
  ) {
  }
  ngOnInit() {
      this.mensajeConsola(true);
  }

  mensajeConsola(objeto: boolean) {
    console.log("Llego el evento", objeto);
    const observableTraerTodos = this._usuarioService.traerTodos()
    // const suscripcion = observableTraerTodos.subscribe(
    observableTraerTodos.subscribe(
      (data) => { // THEN TRY
        this.arregloUsuarios = data as any[]
        console.log(data)
      },
      (error) => { // CATCH
        console.log(error)

      }
    );
    // this.arregloObservables.push(suscripcion)
    // suscripcion.unsubscribe()
  }

  crearUsuario() {
    const usuarioNuevo = {
      cedula: '123456789555',
      nombre: 'Naruto',
      apellido: 'Uzumaki'
    };
    const observableCrearUsuario = this._usuarioService.crear(usuarioNuevo)
    observableCrearUsuario.subscribe(
      (datos) => { // THEN TRY
        console.log('Nuevo usuario: ', datos)
        // Para popular una tabla, volver a llamar al backend de nuevo
        this.mensajeConsola(true)
      },
      (error) => { // CATCH
        console.log('Error',error)
      }
    )
  }

}

