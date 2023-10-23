import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { log } from 'console';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'call-api-basics';

  public products: any;

  constructor() { }

  ngOnInit() { }
}


export interface Product {
  "id": number,
  "title": string,
  "description": string,
  "price": number,
  "discountPercentage": number,
  "rating": number,
  "stock": number,
  "brand": "Apple",
  "category": string,
  "thumbnail": string,
  "images": string[] }