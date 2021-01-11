import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from 'src/app/admin/product-form/product.model';
import { ProductService } from 'src/app/product.service';
import { CartServiceService } from 'src/app/shopping-cart/cart.service';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent implements OnInit {
  @Input('product')
  product:product;
  products$:Observable<product[]>;
  productAddedTocart:product[];
  alerts: any=[];
  quantity: number=0;
  constructor(private productservice:ProductService,private cartservice:CartServiceService) { }

  ngOnInit(): void {
    this.cartservice.cartObservable.subscribe({
      next : (cart)=>{
       this.quantity = this.cartservice.getQuantity(this.product)
      }
    })
    console.log(this.quantity)
  }

  addToCart(product:product){
    this.cartservice.addToCart(product);
  }


  plusQuantity(){
    this.quantity++
    this.cartservice.setQuantity(this.product,this.quantity)
  }

  minusQuantity(){
    this.quantity--
    this.cartservice.setQuantity(this.product,this.quantity)
  }
      
}
