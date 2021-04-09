import TeacherState , { initializeState } from '../services/teacher.state'
import { Action, createReducer, on } from '@ngrx/store';
import * as TeacherActions from '../services/teacher.action';


const initialStateData = initializeState();

const reducerData = createReducer(

  initialStateData,    
    
    on(TeacherActions.GetTeacherAction, state => state),
    
    on(TeacherActions.SuccessGetTeacherAction, (state: TeacherState, { payloaded }) => {
      return { ...state, TeacherData: payloaded, TeacherError: null };
    }),
  
    on(TeacherActions.ErrorTeacherAction, (state: TeacherState, error: Error) => {
      console.error(error);
      return { ...state, TeacherError: error };
    }),
  
  
  
  );


export function TeacherReducer(
    state: TeacherState | undefined,
    action: Action
  ): TeacherState {
    return reducerData(state, action);
  }