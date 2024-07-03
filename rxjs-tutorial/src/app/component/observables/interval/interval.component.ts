import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  message;
  videoSubscription: Subscription;

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    const brodcastVideo = interval(2000);

    this.videoSubscription = brodcastVideo.subscribe((res)=>{
      this.message = 'Video '+res;
      this.designUtilityService.print(this.message, 'elContainer');

      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    });
  }

}
