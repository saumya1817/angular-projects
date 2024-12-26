import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.css']
})
export class ViewchildChildComponent implements OnInit {

  name: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeName(){
    return "LMNOPQRST";
  }

}
