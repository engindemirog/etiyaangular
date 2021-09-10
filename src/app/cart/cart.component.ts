import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../product/product';
import { CartItem } from './cart-item';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[]=[]
  constructor(private cartService:CartService, private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  removeFromCart(product:Product){
    this.cartService.removeFromCart(product)
    this.toastrService.error("Silindi",product.name)
  }
}
