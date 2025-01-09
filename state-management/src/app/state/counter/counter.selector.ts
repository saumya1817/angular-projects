import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectCounterState = ( state: AppState ) => state.counter;

//Expose data to component
export const selectCounter = createSelector(
    selectCounterState,
    (state) => state.count
);