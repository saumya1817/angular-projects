import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent implements OnInit {

  regsiteredUsers: {name: string, email: string}[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this.regsiteredUsers.push(form.value);
    form.reset();
  }

}
