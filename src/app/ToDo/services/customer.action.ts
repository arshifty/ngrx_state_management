import { createAction, props } from '@ngrx/store';
import Customer from './Customer';


export const GetCustomerAction = createAction('[Customer] - Get Customer');

export const BeginGetCustomerAction = createAction('[Customer] - Get Customer');

export const SuccessGetCustomerAction = createAction(
    '[Customer] - Sucess Get Customer',
    props<{ payloaded: Customer[] }>()
);

export const ErrorCustomerAction = createAction('[Customer] - Error', props<Error>());