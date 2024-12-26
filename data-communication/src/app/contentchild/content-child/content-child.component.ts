import { Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements OnInit {

  @ContentChild('projectedContent') projectedContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit() {
    console.log(this.projectedContent.nativeElement.textContent);
  }

}
