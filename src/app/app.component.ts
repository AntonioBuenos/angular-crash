import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {products, products as data} from './data/products'
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-crash';

  products: IProduct[] = []
  loading = false

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe( () => {
      this.products = products
      this.loading = false
    })
  }
}
