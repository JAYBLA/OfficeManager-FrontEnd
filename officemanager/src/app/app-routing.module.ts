import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCustomerComponent} from './components/add-customer/add-customer.component';
import {CustomerDetailComponent} from './components/customer-detail/customer-detail.component';
import {CustomerListComponent} from './components/customer-list/customer-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customers/:id', component: CustomerDetailComponent },
  { path: 'customer/add', component: AddCustomerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
