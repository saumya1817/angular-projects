import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() title: string = 'Untitled Tab';
  hidden: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
