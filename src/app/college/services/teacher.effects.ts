import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { TeacherHttpService } from '../services/teacher.services'
import Teacher from './Teacher'
import * as TeacherActions from '../services/teacher.action';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, take } from 'rxjs/operators';

@Injectable()
export class TeacherEffects {

    constructor(private teacherService: TeacherHttpService, private action$: Actions) { }


    GetTeacher$: Observable<Action> = createEffect(() =>
        this.action$.pipe(
            ofType(TeacherActions.BeginGetTeacherAction),
            mergeMap(action =>
                this.teacherService.getTeacher().pipe(
                    map((data: Teacher[]) => {
                        return TeacherActions.SuccessGetTeacherAction({ payloaded: data });
                    }),
                    catchError((error: Error) => {
                        return of(TeacherActions.ErrorTeacherAction(error));
                    })
                )
            ),
            take(1)
        )
    );

}