import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

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

  getProduct(id: string): Observable<any> {
    if(id === null || id === undefined) {
      id = '';
    }
    return this.http.get<any>(`https://dummyjson.com/products/${id}`)
    .pipe(
      map((response: any) => response),
      catchError((err) => {
        return throwError(() => err);
      })
      );
  }
}
