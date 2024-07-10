import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { of } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit,OnChanges {

  obs2essage;
  hello = 'hello';
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnChanges(): void {
    console.log("on changes")
  }

  ngOnInit(): void {

    // const obs1 = of('Saumya','Rakesh','Gayatri');
    // const obs2 = of({a: 'Saumya',b: 'Rakesh',c: 'Gayatri'});
    // let count = 0;

    // obs1.subscribe((res)=>{
    //   this.designUtilityService.print(res, 'elContainer');
    // })

    // obs2.subscribe((res)=>{
    //   this.obs2essage = res;
    // })
    
    
  }

  click(){
    console.log((document.getElementById("inputbox") as HTMLInputElement).value)
  }

}
