import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-add-to-cart',
    templateUrl: 'add-to-cart.component.html',
    styleUrl: 'add-to-cart.component.css'
})

export class AddToCartComponent implements OnInit {
    @Output() handleAddToCart = new EventEmitter<number>()
    
    AddToCart() {}

    constructor() { }

    ngOnInit() { }
}