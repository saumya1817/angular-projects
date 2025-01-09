import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCounter } from '../state/counter/counter.selector';
import { AppState } from '../state/app.state';
import { decrement, increment, reset } from '../state/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  count$: Observable<any>;
  counter: any;

  constructor(private store: Store<AppState>) { 
    this.count$ = this.store.select(selectCounter)
  }

  ngOnInit(): void {
    this.count$.subscribe((data)=>{
      this.counter = data;
    });

  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement());
  }

  reset(){
    this.store.dispatch(reset());
  }
}
