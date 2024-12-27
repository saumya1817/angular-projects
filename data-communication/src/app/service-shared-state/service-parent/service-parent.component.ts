import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-service-parent',
  templateUrl: './service-parent.component.html',
  styleUrls: ['./service-parent.component.css']
})

export class ServiceParentComponent implements OnInit {

  message: string;
  message1: string;
  message2: string;
  message3: string;
  message4: string;
  message5: string;
  message6: string;
  ifSubject = false;
  ifBehaviorSubject = false;
  ifReplaySubject = false;
  constructor(private sharedService: SharedServiceService) { }

  ngOnInit(): void {    
  }

  subject(){
    this.sharedService.sendMessage(this.message);
    this.ifSubject = true;
    this.ifBehaviorSubject = false;
    this.ifReplaySubject = false;
  }

  behaviorSubject(){
    this.sharedService.updateBehaviorSubject(this.message1);
    this.sharedService.updateBehaviorSubject(this.message2);
    this.sharedService.updateBehaviorSubject(this.message3);
    this.ifSubject = false;
    this.ifReplaySubject = false;
    this.ifBehaviorSubject = true;
  }

  replaySubject(){
    this.sharedService.updateReplaySubject(this.message4);
    this.sharedService.updateReplaySubject(this.message5);
    this.sharedService.updateReplaySubject(this.message6);
    this.ifSubject = false;
    this.ifBehaviorSubject = false;
    this.ifReplaySubject = true;
  }

}
