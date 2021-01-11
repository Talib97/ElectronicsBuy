
import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from './admin/product-form/product.model';




@Injectable({
  providedIn: 'root'
})
export class ProductService{
  Url="https://electronicsbuy-1.firebaseio.com/products.json";
  productsArray:product[]=[]
 
  constructor(private http:HttpClient,private db:AngularFireDatabase) { }

  saveProducts(product:product){
   return this.http.post<product>(this.Url,product);
    }
  

  getProducts(){
    return this.http.get<product[]>(this.Url).pipe(
      map(responseData => {
        
        for (const key in responseData) {
          
          if (responseData.hasOwnProperty(key)) {
           this.productsArray.push({ productId: key, ...responseData[key] })
          }
        }
        return this.productsArray
      }))
  }
  editProduct(productId){
   return this.http.get<product>('https://electronicsbuy-1.firebaseio.com/products/'+productId+'.json');
  }

  updateProduct(product:product,productId){
    return this.http.put<product>('https://electronicsbuy-1.firebaseio.com/products/'+productId+'.json',product)
  }

  deleteProduct(productId){
    return this.http.delete<product>('https://electronicsbuy-1.firebaseio.com/products/'+productId+'.json');
  }

  getProductById(productId){
    return this.http.get<product>('https://electronicsbuy-1.firebaseio.com/products/'+productId+'.json').pipe(
      map(
        result=>{
          return <product>result
        }
      )
    )
  }


 

  

    
  }

  





