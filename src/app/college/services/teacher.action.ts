import { createAction, props } from '@ngrx/store';
import Teacher from '../services/Teacher'

export const GetTeacherAction = createAction('[Teacher] - Get Teacher');

export const BeginGetTeacherAction = createAction('[Teacher] - Get Teacher');

export const SuccessGetTeacherAction = createAction(
    '[Teacher] - Sucess Get Teacher',
    props<{ payloaded: Teacher[] }>()
);

export const ErrorTeacherAction = createAction('[Teacher] - Error', props<Error>());
