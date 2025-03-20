import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';

@Component({
    selector: 'app-card-list',
    templateUrl: 'card-list.component.html',
    styleUrl: 'card-list.component.css',
    imports: [CardComponent]
})

export class CardListComponent implements OnInit {
    data: any[] = []

    constructor(
        private productService: ProductService,
        private router: Router
    ) { }

    ngOnInit():void {
        this.productService.getAllProduct().subscribe((res) => {
            this.data = res
        })
    }

    onImageClick(id: string) {
        this.router.navigate(['/product', id]);
    }
}