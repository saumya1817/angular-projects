import { inject } from "@angular/core";
import { InitialCountService } from "src/app/service/initial-count.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as CounterActions from './counter.actions';

export class CounterEffect {
    // Add the service call
    private api = inject(InitialCountService);
    // Inject actions to load API calls
    actions$ = inject(Actions);

    getCountValue = createEffect(()=>
    this.actions$.pipe(
        //oftype will tell what is the type of action
        ofType(CounterActions.increment),
        //add some logic
    ));
}