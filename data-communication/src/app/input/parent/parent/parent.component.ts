import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  userName: any;
  ifLoadChild: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  hideChild(): void{
    this.ifLoadChild = false;
  }

  loadChild(): void{
    this.ifLoadChild = true;
  }

}
