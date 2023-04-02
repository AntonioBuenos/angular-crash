import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit{
  title = 'angular-crash';

  /*  products: IProduct[] = []*/
  loading = false
  /*  products$: Observable<IProduct[]>   //$ означает, что это стрим*/
  term: string = ''

  constructor(public productsService: ProductsService,
              public modalService: ModalService) {
  }

  ngOnInit(): void {
    this.loading = true
    /*    this.products$ = this.productsService.getAll().pipe(
          tap( () => this.loading = false)
        );*/
    this.productsService.getAll().subscribe( () => {
      this.loading = false
    })
  }
}
