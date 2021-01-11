import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';
import { product } from './product.model';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @ViewChild('productForm') productForm:NgForm

  categories: any[] = [
    { name: 'Mobile' },
    { name: 'Laptop' },
    { name: 'Gaming Console' },
    { name: 'AC' },
    { name: 'TV' },
  ];
  
  product;


  constructor
  (
    private productservice: ProductService,
    private router:Router
   ) {}

    save(product:product) {
      this.productservice.saveProducts(product).subscribe(product=>{console.log(product)})
      this.router.navigate(['/admin/admin-products']);
   }
  
  ngOnInit(): void {}



}
