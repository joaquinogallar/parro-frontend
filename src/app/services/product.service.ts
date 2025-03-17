import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {
    private readonly http: HttpClient = inject(HttpClient)
    private url: string = "http://localhost:8080/api/v1"

    public getAllProduct(): Observable<any> {
        return this.http.get(`${this.url}/product`).pipe(
            catchError((error) => {
                console.error('Error al obtener datos', error);
                return of([]); 
              })
        )
    }
    
    constructor() { }
    
}