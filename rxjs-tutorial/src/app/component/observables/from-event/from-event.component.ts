import { AfterViewInit } from '@angular/core';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss'],
})
export class FromEventComponent implements OnInit, AfterViewInit {
  count = 0;
  constructor() {}

  @ViewChild('addBtn') addBtn: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    fromEvent(this.addBtn.nativeElement, 'click').subscribe((res) => {
      this.count++;
      this.print(this.count);
    });
  }

  print(count) {
    let el = document.createElement('li');
    el.innerText = 'Video ' + count;
    document.getElementById('elContainer').appendChild(el);
  }
}
