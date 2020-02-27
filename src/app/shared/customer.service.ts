import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase: AngularFireDatabase) { }
  customerlist:AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    location: new FormControl(''),
  });

getCustomer(){
  this.customerlist = this.firebase.list('customer');
  return this.customerlist.snapshotChanges();
}

insetCustomer(customer){
  this.customerlist.push({
    fullname: customer.fullname,
    email: customer.email,
    mobile: customer.mobile,
    location: customer.location
  });
}

populateForm(customer){
  this.form.setValue(customer);
}

updateCustomer(customer){
  this.customerlist.update(customer.$key,
    {
      fullname: customer.fullname,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location

  });
}

deleteCustomer($key:string){
  this.customerlist.remove($key);
}

}
