import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  nombre: string = 'Joel'

  constructor(private http: HttpClient) { }

  login(params: HttpParams): Observable<any> {
    return this.http.post("http://localhost:8080/api/v1/login", params.toString(), {
      headers: {'Content-type':'application/x-www-form-urlencoded'}
    });
  }

  imprimirLoggin(user:string, pass:string){
    console.log('funcion imprimir login')
    console.log('usuario', user)
    console.log('contrasenia', pass)
  }

  setNombre(valor:string){
    this.nombre = valor
  }

  getNombre():string{
    return this.nombre;
  }

  
}
