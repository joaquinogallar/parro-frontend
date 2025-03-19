import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CardComponent } from '../card/card.component';

@Component({
    selector: 'app-card-list',
    templateUrl: 'card-list.component.html',
    styleUrl: 'card-list.component.css',
    imports: [CardComponent]
})

export class CardListComponent implements OnInit {
    data: any[] = []

    constructor(private productService: ProductService) { }

    test(id: string) {
        console.log(id);
    }

    ngOnInit():void {
        this.productService.getAllProduct().subscribe((res) => {
            this.data = res
        })
    }
}