import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { log } from 'console';
import { Subscription, Subject, takeUntil } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: any;
  private subs: any;

  constructor(
    private productService: ProductService) { }

  ngOnInit(): void {
    console.log("calling ngOnInit");
    this.onGetProducts(); //const partnerId = this.route.snapshot.paramMap.get("id") as string;
    console.log("finishing ngOnInit");
  }
  ngOnDestroy(): void {
    console.log(`Checking if subscription is closed in ProductComponent: ${this.subs.closed}`)
  }

  onGetProducts(): any {
    this.subs = this.productService.getProducts()
    .subscribe({
      next: res => this.products = res,
      error: err => console.log(err),
      complete: () => console.log("Completed getting products!")
    })

    return this.products;
  }

}
