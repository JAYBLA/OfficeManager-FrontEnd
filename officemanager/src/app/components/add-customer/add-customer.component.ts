import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = {
    name: '',
    phone: '',
    email: '',
    physical_address: '',
  };
  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }


  saveCustomer(): void {
    const data = {
      name: this.customer.name,
      phone: this.customer.phone,
      email: this.customer.email,
      physical_address: this.customer.physical_address
    };
    console.log(data);

    this.customerService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

    newCustomer(): void {
      this.submitted = false;
      this.customer = {
        name: '',
        phone: '',
        email: '',
        physical_address: '',
      };
    }
}


