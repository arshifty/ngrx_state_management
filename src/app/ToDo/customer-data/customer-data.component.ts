import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import ToDoState from '../services/todo.state';
import Customer from '../services/Customer';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as CustomerActions from '../services/customer.action';


@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {

  customer$: Observable<ToDoState>;
  CustomerSubscription: Subscription;
  customerList: Customer[] = [];
  CustomerError: Error = null;

  constructor(private store: Store<{ todoss: ToDoState }>) {
    this.customer$ = store.pipe(select('todoss'));
  }

  ngOnInit() {
    this.CustomerSubscription = this.customer$
      .pipe(
        map(x => {
          this.customerList = x.CustomersDos;
          this.CustomerError = x.CustomerError;
        })
      )
      .subscribe();

    this.store.dispatch(CustomerActions.BeginGetCustomerAction());
  }

  ngOnDestroy() {
    if (this.CustomerSubscription) {
      this.CustomerSubscription.unsubscribe();
    }
  }
}
