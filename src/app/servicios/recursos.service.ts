import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Foto } from '../interfaz/foto';

@Injectable({
  providedIn: 'root'
})
export class RecursosService {
  private firebaseUrl = 'https://images-api.nasa.gov/search?q=galaxy&media_type=image';

 constructor(private http: HttpClient) { }

 obtenerDatos(): Observable<Foto[]> {
   return this.http.get<{[key: string]: Foto}>(this.firebaseUrl).pipe(
     map(response => {
       const fotos: Foto[] = [];
       for (const key in response) {
         if (response.hasOwnProperty(key)) {
           fotos.push({...response[key], id: key});
         }
       }
       return fotos;
     })
   );
 }
}
