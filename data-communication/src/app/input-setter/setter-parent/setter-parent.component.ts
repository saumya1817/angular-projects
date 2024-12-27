import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setter-parent',
  templateUrl: './setter-parent.component.html',
  styleUrls: ['./setter-parent.component.css']
})
export class SetterParentComponent implements OnInit {

  message: string;
  dataToChild: string;
  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    this.dataToChild = this.message;
  }

}
