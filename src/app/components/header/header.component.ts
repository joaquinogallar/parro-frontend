import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.css'
})

export class HeaderComponent implements OnInit {
    logoImg: string = "/assets/images/logo-parro-no-bg.png"

    constructor() { }

    ngOnInit() { }
}