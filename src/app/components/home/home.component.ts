import { Component, OnInit } from '@angular/core';
import { CardListComponent } from '../cards/card-list/card-list.component';
import { HeaderComponent } from '../navigation/header/header.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [CardListComponent, HeaderComponent]
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}