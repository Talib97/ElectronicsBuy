import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { product } from '../admin/product-form/product.model';
import { ProductService } from '../product.service';
import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  // products: product[] = [];
  // category: string;
  // filteredProducts: product[] = [];
  // subscription: Subscription;
  // categories$;



  constructor(private categoryservice:CategoryService) {
  //   this.productservice.getAll().subscribe(
  //     products => {
  //       this.products = products;
  //       route.queryParamMap.subscribe(params => {
  //         this.category = params.get('category');
  //         this.filteredProducts = (this.category) ?
  //           this.products.filter(p => p.category === this.category) :
  //           this.products;


  //       });
  // });
}
ngOnInit(){
  // this.categories$=this.categoryservice.getCategories

}



}
