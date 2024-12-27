import { Component, Input, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-service-child',
  templateUrl: './service-child.component.html',
  styleUrls: ['./service-child.component.css']
})
export class ServiceChildComponent implements OnInit {

  data: string;
  behaviorSubjectMsg: string;
  replaySubjectMsgs: any[] = [];
  @Input() ifSubject: boolean;
  @Input() ifBehaviorSubject: boolean;
  @Input() ifReplaySubject: boolean;

  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {
    this.getData();
    this.getBehaviorSubject();
    this.getReplaySubject();
  }

  getData(){
    this.sharedService.message$.subscribe(message=>{
      this.data = message;
    });
  }

  getBehaviorSubject(){
    this.sharedService.behaviorSubjectMsg$.subscribe(message=>{
      this.behaviorSubjectMsg = message;
    });
  }

  // Emitting all the values
  getReplaySubject(){
    this.sharedService.replaySubjectMsg.subscribe(message=>{
      this.replaySubjectMsgs.push(message);
      console.log(message)
    });
  }

}
