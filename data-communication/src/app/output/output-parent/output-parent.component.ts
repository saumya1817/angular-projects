import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-parent',
  templateUrl: './output-parent.component.html',
  styleUrls: ['./output-parent.component.css']
})
export class OutputParentComponent implements OnInit {

  childData: any;
  ifChildData: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showData(e: Event){
    this.ifChildData = true;
    this.childData = e;
  }

}
