import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-costomer-list',
  templateUrl: './costomer-list.component.html',
  styleUrls: ['./costomer-list.component.css']
})
export class CostomerListComponent implements OnInit {

  constructor(private CustomerService: CustomerService) { }
   customerArray = [];
   showDeleteMessage: boolean;

  ngOnInit() {
    this.CustomerService.getCustomer().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key:item.key,
            ...item.payload.val()
          }
        });
      }
    );
  }

  onDelete($key){
    if(confirm('Are you sure to delete this record?')){
      this.CustomerService.deleteCustomer($key);
      this.showDeleteMessage = true;
      setTimeout (() => this.showDeleteMessage = false, 3000);
    }
  }


}
