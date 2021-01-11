import {Component, OnDestroy, OnInit, } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProductService } from 'src/app/product.service';
import { product } from '../product-form/product.model';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit , OnDestroy {

  products:product[]=[]
  constructor(private productservice:ProductService)
   {}
   

  ngOnInit() {
    this.getProducts()
    }

   ngOnDestroy(){
     this.getProducts()
   } 

  getProducts(){
    this.productservice.getProducts().subscribe(
      response=>{
        this.products=response
    }
    )
  }


  
  
    
  
  
  
  


}
