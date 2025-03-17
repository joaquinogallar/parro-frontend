import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CardListComponent } from '../cards/card-list/card-list.component';

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrl: 'home.component.css',
    imports: [HeaderComponent, CardListComponent]
})

export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}