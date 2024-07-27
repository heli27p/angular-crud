import { Component } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

  id: number = 0;
  customer: Customer = new Customer();

  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initializeComponent();
  }

  private initializeComponent() {
    this.id = +this.route.snapshot.params['id']; // Convert string to number

    this.customerService.getCustomerById(this.id).subscribe(
      (data: Customer) => {
        this.customer = data;
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.customerService.updateCustomer(this.id, this.customer).subscribe(
      () => this.goToCustomerList(),
      error => console.log(error)
    );
  }

  goToCustomerList() {
    this.router.navigate(['/customers']);
  }
}
