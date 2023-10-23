import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get<any>('https://dummyjson.com/products')
    .pipe(
      map((response: any) => response.products),
      catchError((err) => {
        return throwError(() => err);
      })
      );
  }
}
