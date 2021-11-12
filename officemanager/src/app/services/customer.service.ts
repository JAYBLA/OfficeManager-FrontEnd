import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  customerUrl = 'http://127.0.0.1:8000/customer/customer/customers';

  constructor(private httpClient: HttpClient) { }
    getAll(): Observable<Customer[]> {
      return this.httpClient.get<Customer[]>(this.customerUrl);
    }

    get(id: any): Observable<Customer> {
      return this.httpClient.get(`${this.customerUrl}/${id}/`);
    }

    create(data: any): Observable<any> {
      return this.httpClient.post(this.customerUrl, data);
    }

    update(id: any, data: any): Observable<any> {
      return this.httpClient.put(`${this.customerUrl}/${id}/`, data);
    }

    delete(id: any): Observable<any> {
      return this.httpClient.delete(`${this.customerUrl}/${id}/`);
    }

    deleteAll(): Observable<any> {
      return this.httpClient.delete(this.customerUrl);
    }
}
