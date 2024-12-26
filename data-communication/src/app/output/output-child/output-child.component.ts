import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  templateUrl: './output-child.component.html',
  styleUrls: ['./output-child.component.css']
})
export class OutputChildComponent implements OnInit {

  @Output() data = new EventEmitter<any>();
  username: string;

  constructor() { }

  ngOnInit(): void {
  }

  emitData(){
    this.data.emit(this.username);
  }

}
