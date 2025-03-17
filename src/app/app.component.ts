import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardListComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'parro-frontend';
}
