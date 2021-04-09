import ToDo from './todo.model';
import Customer from './Customer';

export default class ToDoState {
  ToDos: Array<ToDo>;
  CustomersDos: Array<Customer>;
  ToDoError: Error;
  CustomerError: Error;
}

export const initializeState = (): ToDoState => {
  return { ToDos: Array<ToDo>(), CustomersDos: Array<Customer>(), ToDoError: null , CustomerError: null };
};
