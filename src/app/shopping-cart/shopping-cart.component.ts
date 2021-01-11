import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from '../admin/product-form/product.model';
import { orderInfo, OrderService, productInfo } from '../my-orders/order.service';
import { ProductService } from '../product.service';
import { CartServiceService } from './cart.service';


export interface cartItem {
product:product;
quantity:number;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart;
  total=0;
  cartItems:cartItem[]=[];
  modalRef:BsModalRef;
  UserId: string;
  constructor(
    private cartservice:CartServiceService,
    private productservice:ProductService,
    private modalService: BsModalService,
    private orderservice:OrderService,
    private router:Router,
    private auth:AngularFireAuth
    ) {this.auth.authState.subscribe(
      uid=>{
        this.UserId=uid.uid
      }
    )}

  ngOnInit(): void {
   this.subscribeCart()
   
  }

  subscribeCart(){
    this.cartservice.cartObservable.subscribe({
      next : (cart)=>{
        this.cartItems = []
        let Observables = []
        for(let productId in cart){
          console.log(productId)
          Observables.push( this.productservice.getProductById(productId)
          .pipe(
            map(product=>{
              this.total += (product.price * cart[productId])
              let item:cartItem ={
                      product : product,
                      quantity : cart[productId]
                    }
                    return item
            })
          )
        )
          
 }
        forkJoin(Observables).subscribe(
          (result:cartItem[])=>{
            this.cartItems=result
          }
        )
      }
    })
  }

 
  openModal(form) {
    this.modalRef = this.modalService.show(form,{
      animated:true,
      class:"modal-xl"
    });
  }
  
    
  



  
   checkout(firstName,lastName,address){
    let Firstname=firstName.value;
    let Lastname=lastName.value;
    let Address=address.value;
    let orderInfo:orderInfo;
    let productInfos:productInfo[]=[];
    this.cartItems.forEach(i=>{
      productInfos.push({
        productName:i.product.title,
        price:i.product.price,
        quantity:i.quantity
      })
    })

    orderInfo={
      Address,
      Firstname,
      Lastname,
      products:productInfos
    }
    this.orderservice.placeOrder(orderInfo).subscribe(
      (res)=>{
        this.modalRef.hide()
        this.cartservice.removeCartData()
        this.router.navigate(['my-orders'])
      },
      err=>{
        console.log({err:"order not placed"})
      }
    )
    
    }
  }

