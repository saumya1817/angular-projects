import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements OnInit {

  name: any;
  changedName: any;
  // Without child template reference
  @ViewChild(ViewchildChildComponent) viewChildComp: ViewchildChildComponent = new ViewchildChildComponent;

  //With template child reference
  // @ViewChild(viewChildRef) viewChildCompRef: ViewchildChildComponent;

  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    this.viewChildComp.name = this.name;
  }

  callChildMethod(){
    this.changedName = this.viewChildComp.changeName();
  }

}
