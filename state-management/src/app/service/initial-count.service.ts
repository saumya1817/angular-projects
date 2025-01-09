import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InitialCountService {

  count: number = 10;

  constructor() { }

  getInitialCount(){
    return this.count;
  }
}
