import { Component, OnInit } from '@angular/core';
import { productInfo,orderInfo } from '../my-orders/order.service';
import { cartItem } from '../shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    
  }


}