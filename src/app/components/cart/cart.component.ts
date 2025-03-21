import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.moduel';

@Component({
    selector: 'app-cart',
    templateUrl: 'cart.component.html'
})

export class CartComponent implements OnInit {
    cart: Product[] = []

    constructor() { }

    ngOnInit() { }
}