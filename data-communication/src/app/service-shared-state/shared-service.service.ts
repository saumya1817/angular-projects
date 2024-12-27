import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  // Create a new Subject
  private messageSource = new Subject<string>();
  
  //Expose a read-only Observable to other parts of the application while keeping the underlying Subject private.
  //Converts the Subject into a plain Observable.
  //This means that external consumers can only subscribe to it and cannot directly call methods like next() to emit values.
  //External components can listen to changes but cannot modify the data stream, ensuring better control and data integrity.
  //It promotes encapsulation.
  message$ = this.messageSource.asObservable();

  //Create a new Behavior Subject
  private behaviorSubjectMsg = new BehaviorSubject<string>('Initial Message');

  //Encapsulation
  behaviorSubjectMsg$ = this.behaviorSubjectMsg.asObservable();

  //Create a new Replay Subject
  replaySubjectMsg = new ReplaySubject<string>(2);

  //Encapsulation
  replaySubjectMsg$ = this.replaySubjectMsg.asObservable();


  constructor() { }

  sendMessage(message: string){
    this.messageSource.next(message);
  }

  updateBehaviorSubject(message: string){
    this.behaviorSubjectMsg.next(message);
  }

  updateReplaySubject(message: string){
    this.replaySubjectMsg.next(message);
  }

}
