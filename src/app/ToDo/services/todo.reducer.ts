import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from './todo.action';
import ToDo from './todo.model';
import ToDoState, { initializeState } from './todo.state';
import * as CustomerActions from './customer.action';


const initialState = initializeState();

const reducer = createReducer(
  initialState,

  //customers reducers
  
  on(CustomerActions.GetCustomerAction, state => state),
  
  on(CustomerActions.SuccessGetCustomerAction, (state: ToDoState, { payloaded }) => {
    return { ...state, CustomersDos: payloaded, CustomerError: null };
  }),

  on(CustomerActions.ErrorCustomerAction, (state: ToDoState, error: Error) => {
    console.error(error);
    return { ...state, CustomerError: error };
  }),

//todo reducers
  on(ToDoActions.GetToDoAction, state => state),

  on(ToDoActions.SuccessGetToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, ToDos: payload, ToDoError: null };
  }),
 
  on(ToDoActions.ErrorToDoAction, (state: ToDoState, error: Error) => {
    console.error(error);
    return { ...state, ToDoError: error };
  })

);

export function ToDoReducer(
  state: ToDoState | undefined,
  action: Action
): ToDoState {
  return reducer(state, action);
}
