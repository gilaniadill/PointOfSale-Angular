import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';


export const routes: Routes = [
  {
    path:'',
    component: Layout,
    children:[
      {
        path: '',
        loadComponent:()=>import('./pages/product-list/product-list').then(m=>m.ProductList)
      },
      {
        path:'cart',
        loadComponent:()=>import('./pages/cart/cart').then(m=>m.CartComponent)
      },
      {
           path:'checkout',
        loadComponent:()=>import('./pages/checkout/checkout').then(m=> m.Checkout)

      },
      {
        path: 'add-product', // new route
        loadComponent: () => import('./pages/add-products/add-products').then(m => m.AddProductComponent)
      }
    ]
  }
];
