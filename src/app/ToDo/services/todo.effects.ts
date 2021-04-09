import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';
import * as ToDoActions from './todo.action';
import { ToDoHttpService } from './todo.httpservice';
import ToDo from './todo.model';
import Customer from './Customer'
import * as CustomerActions from './customer.action';


@Injectable()
export class ToDoEffects {

  constructor(private todoService: ToDoHttpService, private action$: Actions) {}

  GetCustomer$: Observable<Action> = createEffect(() =>
  this.action$.pipe(
    ofType(CustomerActions.BeginGetCustomerAction),
    mergeMap(action =>
      this.todoService.getCustomerData().pipe(
        map((data: Customer[]) => {
          return CustomerActions.SuccessGetCustomerAction({ payloaded: data });
        }),
        catchError((error: Error) => {
          return of(CustomerActions.ErrorCustomerAction(error));
        })
      )
    ),
    take(1)
  )
);


  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginGetToDoAction),
      mergeMap(action =>
        this.todoService.getToDos().pipe(
          map((data: ToDo[]) => {
            return ToDoActions.SuccessGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorToDoAction(error));
          })
        )
      ),
      // take(1)
    )
  );

}
