import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
