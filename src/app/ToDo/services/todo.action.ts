import { createAction, props } from '@ngrx/store';
import ToDo from './todo.model';

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Sucess Get ToDo',
  props<{ payload: ToDo[] }>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
