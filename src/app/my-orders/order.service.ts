import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Order } from './order.model';

export interface orderInfo {
  Firstname: string;
  Lastname: string;
  Address: string;
  products: productInfo[];
}
export interface productInfo {
  productName: string;
  quantity: number;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orderPlaceUrl = "https://electronicsbuy-1.firebaseio.com/orders.json"
  placedProduct: Order[] = [];
  uid: string;
  constructor(private http: HttpClient,private auth:AngularFireAuth, private db:AngularFireDatabase) { 
    this.auth.authState.subscribe(uid=>{
      this.uid=uid.uid
    })
  }

  placeOrder(orderInfo: orderInfo) {
    return this.http.put("https://electronicsbuy-1.firebaseio.com/orders/"+this.uid+"/.json",orderInfo)
  }

  getUserOrder() {
    return this.http.get("https://electronicsbuy-1.firebaseio.com/orders/"+this.uid+"/products.json")
      .pipe(
        map(
          (response) => {
            console.log("https://electronicsbuy-1.firebaseio.com/orders/"+this.uid+"/products.json")
            console.log(response);
            
            return <Order[]>response
            
            // for (const key in response) {
            //   if (response.hasOwnProperty(key)) {
            //     this.placedProduct.push({orderId:key,...response[key] })
            //   }
            // }
            // return this.placedProduct
          }
        )
      )
  }



}
