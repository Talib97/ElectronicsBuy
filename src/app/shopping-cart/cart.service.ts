import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from '../admin/product-form/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart={};
  cartObservable:BehaviorSubject<Object>;
  constructor() {
    if(!this.isCartExists())
    localStorage.setItem('cart',JSON.stringify(this.cart))
    this.getCartData();
    this.cartObservable=new BehaviorSubject(this.cart)
   }
   get _cartObservable(){
     return this.cartObservable
   }

   
   getCartData(){
     this.cart=JSON.parse(localStorage.getItem('cart'));
   }

   setCartData(){
     localStorage.setItem('cart',JSON.stringify(this.cart));
   }

   removeCartData(){
     localStorage.removeItem("cart")
     this.cartObservable.next({})
   }


   isCartExists(){
     if(localStorage.getItem('cart')){
      return true
     }else{
      return false
     }
   }

  

   addToCart(product:product){
    let quantity= this.cart[product.productId];
    if(quantity){
      this.cart[product.productId]=(+quantity)+1;
    }else{
      this.cart[product.productId]=1;
    }
    localStorage.setItem('cart',JSON.stringify(this.cart))
    this.cartObservable.next(this.cart)
   }

   getQuantity(product:product){
    return this.cart[product.productId] ? +this.cart[product.productId] : 0
  }

  setQuantity(product:product,quantity:number){
    if(quantity<1){
      delete this.cart[product.productId];
    }else{this.cart[product.productId] = quantity;}
    this.setCartData()
    this.cartObservable.next(this.cart)
  }


// addProductToCart(p:product){
//  localStorage.setItem("product",JSON.stringify(p));
// }

// getProductFromCart() {
//   //return localStorage.getItem("product");
//   return JSON.parse(localStorage.getItem('product'));
// }

// removeAllProductFromCart() {
//   return localStorage.removeItem("product");
// }

  



}
