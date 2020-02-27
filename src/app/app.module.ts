import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CostomerListComponent } from './costomer-list/costomer-list.component';
import { CustomerService } from './shared/customer.service';
import { environment } from '../environments/environment'

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CostomerListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
    
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
