import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ObservableComponent } from './observable/observable.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductIdComponent } from './product-id/product-id.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'product-view', component: ProductViewComponent},
  {path: 'product-edit', component: ProductEditComponent},
  // {path: 'product/10', component: ProductIdComponent} //this value(product/10) should be dynamic.
  {path: 'order/:id/:id2', component: OrderViewComponent},
  {path: 'search', component: SearchComponent},
  {path: '', redirectTo: 'product-edit', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'observable', component: ObservableComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'products',
    children: [
      {path: 'view', component: ProductViewComponent},
      {path: 'edit', component: ProductEditComponent},
      {path: 'view/:id', component: ProductIdComponent}
    ]},
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  {path: 'admin', component: AdminHomeComponent, canActivate: [AdminGuardGuard]},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
