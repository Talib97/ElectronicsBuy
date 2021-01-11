import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { product } from 'src/app/admin/product-form/product.model'


@Component({
  selector: 'app-update-product-form',
  templateUrl: './update-product-form.component.html',
  styleUrls: ['./update-product-form.component.css']
})
export class UpdateProductFormComponent implements OnInit {

  @ViewChild('productForm') productForm:NgForm

  categories: any[] = [
    { name: 'Mobile' },
    { name: 'Laptop' },
    { name: 'Gaming Console' },
    { name: 'AC' },
    { name: 'TV' },
  ];

  singleProduct:any={};


  constructor
  (
    private productservice: ProductService,
    private route:ActivatedRoute,
    private router:Router
   ) {}

   update(){
     this.productservice.updateProduct(this.productForm.value,this.route.snapshot.params.id).subscribe(updatedProduct=>{
       console.log(updatedProduct);
     })
     this.router.navigate(['/admin/admin-products'])
   }

   delete(){
     this.productservice.deleteProduct(this.route.snapshot.params.id).subscribe(deletedProduct=>{
       console.log(deletedProduct);
     })
     this.router.navigate(['/admin/admin-products'])
   }
   
  ngOnInit(): void {
    this.productservice.editProduct(this.route.snapshot.params.id).subscribe(
      object=>{
        console.log(this.route.snapshot.params.id);
        this.singleProduct=object
        console.log(this.singleProduct);
      }
    )
  
  }



}

