import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>("http://localhost:8080/customers");
  }

  createCustomer(customer: Customer): Observable<Object> {
    return this.httpClient.post("http://localhost:8080/save", customer)
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`http://localhost:8080/customers/${id}`);
  }

  updateCustomer(id: number, customer: Customer): Observable<Object> {
    return this.httpClient.put(`http://localhost:8080/update/${id}`, customer);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`http://localhost:8080/delete/${id}`);
  }
}
