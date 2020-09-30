import { Injectable } from '@angular/core';
import{TipoProducto} from '../modelo/tipo-producto'
import { HttpClient,  HttpClientModule,  HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoProductosService {
private readonly url='http://localhost:1337/tipoProducto/'
  constructor( private httpClient:HttpClient) { 

  }
  Registrar(tipoProducto: TipoProducto):Observable<any>{
    return this.httpClient.post<any>(`${this.url}Registrar`,tipoProducto);
  }
  Actualizar(tipoProducto: TipoProducto):Observable<any>{
    return this.httpClient.post<any>(`${this.url}Actualizar`,tipoProducto);
  }
  Listar():Observable<any>
  {
    return this.httpClient.post<any>(`${this.url}Listar`,{});
  }
  Eliminar(id:number):Observable<any>
  {
    return this.httpClient.post<any>(`${this.url}Eliminar`,{id:id})
  }
  Obtener(id:number):Observable<any>
  {
    return this.httpClient.post<any>(`${this.url}Obtener`,{id:id})
  }
}
