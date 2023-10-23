import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'console';
import { NavbarComponent } from '../navbar/navbar.component';
import { Product } from '../app.component';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public subscriber: any;
  public product!: Product;
  public prId!: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let urlId = this.route.snapshot.paramMap.get("id") as string;
    if (urlId === null || urlId === undefined){
      urlId = this.prId;
    }
    this.onGetProduct(urlId)
    console.log("NGONINITTEST: ", this.onGetProduct(urlId))
  }

  ngOnDestroy() {
    console.log(`Checking if subscription is closed in ProductDetailComponent: ${this.subscriber.closed}`)
  }

  onGetProduct(id: string): any {
    console.log("product id:" + id)
    this.subscriber = this.productService.getProduct(id).subscribe({
      next: res => {this.product = res; console.log(`TEST ${id}`, res)},
      error: err => console.error(err),
      complete: () => console.log("Completed getting product!")
    });
    console.log(`Checking if subscription is closed in ProductDetailComponent: ${this.subscriber.closed}`)
    console.log("onGetProduct(): ", this.product)
    return this.product;
  }

}
