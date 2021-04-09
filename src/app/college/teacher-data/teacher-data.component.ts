import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import Teacher from '../services/Teacher'
import TeacherState from '../services/teacher.state';
import * as TeacherActions from '../services/teacher.action';



@Component({
  selector: 'app-teacher-data',
  templateUrl: './teacher-data.component.html',
  styleUrls: ['./teacher-data.component.css']
})
export class TeacherDataComponent implements OnInit {

  teacher$: Observable<TeacherState>;
  TeacherSubscription: Subscription;
  teacherList: Teacher[] = [];
  teacherError: Error = null;
  
  constructor(private store: Store<{ teachers: TeacherState }>) {
    this.teacher$ = store.pipe(select('teachers'));
  }

  ngOnInit() {
    this.TeacherSubscription = this.teacher$
      .pipe(
        map(x => {
          this.teacherList = x.TeacherData;
          this.teacherError = x.TeacherError;
        })
      )
      .subscribe();

    this.store.dispatch(TeacherActions.BeginGetTeacherAction());
  }

  ngOnDestroy() {
    if (this.TeacherSubscription) {
      this.TeacherSubscription.unsubscribe();
    }
  }

}
