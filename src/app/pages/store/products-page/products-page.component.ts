import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
 
})
export class ProductsPageComponent implements OnInit {
  public products$!: Observable<Product[]>;

  constructor(private data: DataService) { }

  ngOnInit() {

   this.products$=  this.data.getProducts();
  }

}





