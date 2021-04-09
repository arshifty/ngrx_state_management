import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import * as ToDoActions from '../services/todo.action';
import ToDo from '../services/todo.model';
import ToDoState from '../services/todo.state';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todo$: Observable<ToDoState>;
  ToDoSubscription: Subscription;
  ToDoList: ToDo[] = [];
  todoError: Error = null;

  constructor(private store: Store<{ todoss: ToDoState }>) {
    this.todo$ = store.pipe(select('todoss'));
  }

  ngOnInit() {
    this.ToDoSubscription = this.todo$
      .pipe(
        map(x => {
          this.ToDoList = x.ToDos;
          this.todoError = x.ToDoError;
        })
      )
      .subscribe();
    this.store.dispatch(ToDoActions.BeginGetToDoAction());
  }

  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}
