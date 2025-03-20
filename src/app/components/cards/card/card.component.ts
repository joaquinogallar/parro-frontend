import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { AddToCartComponent } from '../../buttons/add-to-cart/add-to-cart.component';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrl: 'card.component.css',
    imports: [AddToCartComponent]
})

export class CardComponent implements OnInit {
    @Input() id: string = "";
    @Input() productName: string = "def"
    @Input() description: string = "def"
    @Input() price: number = 0.0
    @Input() stock: number = 0
    @Input() size: string = "def"
    @Input() color: string = "def"
    @Input() imageUrl: string = "//img.ltwebstatic.com/images3_pi/2023/12/15/b5/1702606192fe533236ff938e4254e64d94bf16d6a1.webp" 
    @Output() handleImageClick = new EventEmitter<string>();

    onImageClick() {
        this.handleImageClick.emit(this.id);
        console.log(this.id);
        
    }
    
    constructor() {}

    ngOnInit() {
    }
}