import { product } from "../admin/product-form/product.model";
import { productInfo } from "./order.service";

export interface Order {
    orderId?:string
    products:productInfo[];
    price:number;
    quantity:number;
    firstName:string;
    lastName:string;
    address:string;
}