import { Routes } from '@angular/router';
import { ProductDetailComponent } from './components/cards/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: 'product/:id', component: ProductDetailComponent
    }
];
