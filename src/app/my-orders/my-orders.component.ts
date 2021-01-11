import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Order } from './order.model';
import { orderInfo, OrderService, productInfo } from './order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orderedProducts:Order[]=[];
  // products:productInfo[]=[];

  constructor(private orderservice:OrderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchPlacedOrder()
  }

  fetchPlacedOrder(){
    this.orderservice.getUserOrder().subscribe(
      order=>{
        this.orderedProducts=order
      }
    )
  }

 


}
