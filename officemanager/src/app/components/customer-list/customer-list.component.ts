import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers?: Customer[];
  currentCustomer: Customer = {};
  currentIndex = -1;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.retrieveCustomers();
  }

  retrieveCustomers(): void {
    this.customerService.getAll()
      .subscribe({
        next: (data) => {
          this.customers = data;
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveCustomers();
    this.currentCustomer = {};
    this.currentIndex = -1;
  }

  setActiveCustomer(customer: Customer, index: number): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }

  removeAllCustomers(): void {
    this.customerService.deleteAll()
    .subscribe({
      next: (res) => {       
        this.refreshList();
      },
      error: (e) => console.error(e)
    });
  }
}
