import { createAction } from "@ngrx/store";

export const getCountValue = createAction('[Counter Component] getCount');
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');