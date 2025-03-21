import { Routes } from '@angular/router';
import { ProductDetailComponent } from './components/cards/product-detail/product-detail.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'product/:id', component: ProductDetailComponent
    },
    {
        path: 'cart', component: CartComponent
    }
];
