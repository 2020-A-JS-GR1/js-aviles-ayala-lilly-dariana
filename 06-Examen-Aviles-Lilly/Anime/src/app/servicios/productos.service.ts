import { Injectable } from '@angular/core';
import{Producto} from '../modelo/producto'
import { HttpClient,  HttpClientModule,  HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private readonly url='http://localhost:1337/Producto/'
  constructor( private httpClient:HttpClient) { 

  }
  Registrar(producto: Producto):Observable<any>{
    return this.httpClient.post<any>(`${this.url}Registrar`,producto);
  }
  Actualizar(producto: Producto):Observable<any>{
    return this.httpClient.post<any>(`${this.url}Actualizar`,producto);
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
