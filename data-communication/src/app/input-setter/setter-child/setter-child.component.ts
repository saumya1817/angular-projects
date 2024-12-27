import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-setter-child',
  templateUrl: './setter-child.component.html',
  styleUrls: ['./setter-child.component.css']
})
export class SetterChildComponent implements OnInit {

  _data : string;
  constructor() { }

  ngOnInit(): void {
    this._data = 'Initial Message';
  }

  @Input()
  set data(value: string){
    this._data = value;
  }

}
