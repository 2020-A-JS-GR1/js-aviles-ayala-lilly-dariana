//usuario.service.ts

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsuarioService {

  url = "http://localhost:1337"

  /* Con este servicio podremos comunicarnos mediante http
  * Los constructores en angular sirven para la inyección de dependencias */
  constructor(
    private readonly  _httpClient: HttpClient
    /* Inyectando dependencia httpClient para comunicarnos con el backend */
  ) {

  }

  traerTodos() {
    return this._httpClient.get(this.url + "/Usuario") // Petición
  }

  //POST / Crear Usuario
  crear(usuario){
    return this._httpClient.post(
      this.url + "/Usuario", // URL
      usuario
    )
  }

  obtenerUnoPorId(idUsuario: number){
    return this._httpClient.get(this.url + '/Usuario/'+ idUsuario)
  }

  eliminar(idUsuario: number){
    return this._httpClient.delete(
      this.url + '/Usuario/' + idUsuario
    )
  }

}
