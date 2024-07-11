import { Component, OnInit } from '@angular/core';
import { Coffee } from '../logic/Coffee';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list: Coffee[] = [];

  constructor(public data: DataService, private router: Router) { }

  ngOnInit(): void {
    this.data.getList((list:Coffee[])=>{
      this.list = list;
    });
  }

  goDetails(coffee: Coffee){
    this.router.navigate(['/coffee', coffee._id]);
  }

}
