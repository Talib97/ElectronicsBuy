import { Component, OnDestroy, OnInit } from '@angular/core';
import { product } from '../admin/product-form/product.model';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit , OnDestroy{
  categories: any[] = [
    { name: 'Mobile' },
    { name: 'Laptop' },
    { name: 'Gaming Console' },
    { name: 'AC' },
    { name: 'TV' },
  ];
  products:product[]=[];
   constructor(private productservice:ProductService) {this.getProduct()}
    
  ngOnInit(): void {
    
  }

  ngOnDestroy(){
    this.getProduct()
  }




  getProduct(){
  this.productservice.getProducts().subscribe(
    res=>{
      const data=JSON.stringify(res)
      this.products=JSON.parse(data)
    }
  )}


}